'use client'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useDropzone } from 'react-dropzone'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { AlertCircle, FileCode, Lightbulb, MessageSquare, Bug, Upload, X, CheckCircle, Loader2, Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

// Common schema for all forms
const createSchema = (additionalFields: { componentType?: z.ZodString; priority?: z.ZodString; steps?: z.ZodOptional<z.ZodString>; browser?: z.ZodOptional<z.ZodString>; os?: z.ZodOptional<z.ZodString>; screenSize?: z.ZodOptional<z.ZodString>; useCase?: z.ZodOptional<z.ZodString>; usageExamples?: z.ZodOptional<z.ZodString>; similarExamples?: z.ZodOptional<z.ZodString>; category?: z.ZodString; impact?: z.ZodOptional<z.ZodString>; topic?: z.ZodString; isUrgent?: z.ZodDefault<z.ZodBoolean> }) => {
  return z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject should be at least 5 characters"),
    description: z.string().min(20, "Description should be at least 20 characters"),
    attachments: z.array(z.any()).optional(),
    ...additionalFields
  });
};

// Form schemas
const schemas = {
  'bug-report': createSchema({
    componentType: z.string().min(1, "Component selection is required"),
    priority: z.string().min(1, "Priority selection is required"),
    steps: z.string().optional(),
    browser: z.string().optional(),
    os: z.string().optional(),
    screenSize: z.string().optional(),
  }),
  'feature-request': createSchema({
    componentType: z.string().min(1, "Component selection is required"),
    priority: z.string().min(1, "Priority selection is required"),
    useCase: z.string().optional(),
  }),
  'component-request': createSchema({
    usageExamples: z.string().optional(),
    similarExamples: z.string().optional(),
  }),
  'idea-pitch': createSchema({
    category: z.string().min(1, "Category selection is required"),
    impact: z.string().optional(),
  }),
  'contact-dev': createSchema({
    topic: z.string().min(1, "Topic selection is required"),
    isUrgent: z.boolean().default(false),
  })
};

// Type definitions
type TabType = 'bug-report' | 'feature-request' | 'component-request' | 'idea-pitch' | 'contact-dev';
interface FileWithPreview extends File { preview: string }

const CustomerPortal = () => {
  const [activeTab, setActiveTab] = useState<TabType>('bug-report');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [feedback, setFeedback] = useState({ visible: false, success: false, message: '' });
  
  // Create form instances
  const forms = {
    'bug-report': useForm({ resolver: zodResolver(schemas['bug-report']) }),
    'feature-request': useForm({ resolver: zodResolver(schemas['feature-request']) }),
    'component-request': useForm({ resolver: zodResolver(schemas['component-request']) }),
    'idea-pitch': useForm({ resolver: zodResolver(schemas['idea-pitch']) }),
    'contact-dev': useForm({ resolver: zodResolver(schemas['contact-dev']) })
  };
  
  // Get current form
  const form = forms[activeTab];
  
  // Tab information
  const tabs = [
    {
      value: 'bug-report',
      icon: <Bug className="h-5 w-5" />,
      label: 'Bug Report',
      title: 'Report a Bug',
      description: 'Submit details about an issue you\'ve encountered with SeraUI components.',
      color: 'from-red-500 to-rose-600',
      submitLabel: 'Submit Bug Report'
    },
    {
      value: 'feature-request',
      icon: <FileCode className="h-5 w-5" />,
      label: 'Feature Request',
      title: 'Request a New Feature',
      description: 'Tell us about a feature you\'d like to see added to existing components.',
      color: 'from-blue-500 to-indigo-600',
      submitLabel: 'Submit Feature Request'
    },
    {
      value: 'component-request',
      icon: <AlertCircle className="h-5 w-5" />,
      label: 'Component Request',
      title: 'Request a New Component',
      description: 'Suggest a completely new component to be added to the SeraUI library.',
      color: 'from-violet-500 to-purple-600',
      submitLabel: 'Submit Component Request'
    },
    {
      value: 'idea-pitch',
      icon: <Lightbulb className="h-5 w-5" />,
      label: 'Idea Pitch',
      title: 'Pitch an Idea',
      description: 'Share your innovative ideas for SeraUI or suggest improvements to our products.',
      color: 'from-amber-500 to-yellow-600',
      submitLabel: 'Submit Idea'
    },
    {
      value: 'contact-dev',
      icon: <MessageSquare className="h-5 w-5" />,
      label: 'Contact Developer',
      title: 'Contact Developer',
      description: 'Get in touch with our development team directly for technical questions or support.',
      color: 'from-emerald-500 to-green-600',
      submitLabel: 'Send Message'
    }
  ];
  
  // File upload handling with react-dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
      'application/json': ['.json'],
    },
    maxFiles: 5,
    maxSize: 5242880, // 5MB
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map(file => 
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      setFiles(prev => [...prev, ...newFiles]);
      form.setValue('attachments', [...(form.getValues('attachments') || []), ...acceptedFiles]);
    },
    onDropRejected: (fileRejections) => {
      const error = fileRejections[0]?.errors[0];
      toast({
        title: error?.code === 'file-too-large' ? "File too large" : "Invalid file",
        description: error?.code === 'file-too-large' ? "Maximum file size is 5MB" : error?.message || "Please check your file type",
        variant: "destructive"
      });
    }
  });

  const removeFile = (fileToRemove: FileWithPreview) => {
    URL.revokeObjectURL(fileToRemove.preview);
    setFiles(files.filter(file => file !== fileToRemove));
    const currentAttachments = form.getValues('attachments') || [];
    form.setValue('attachments', currentAttachments.filter((file: File) => file.name !== fileToRemove.name));
  };

  // Clean up file previews
  React.useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  // Handle form submission
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFeedback({
        visible: true,
        success: true,
        message: 'Your submission has been received. Thank you!'
      });
      
      form.reset();
      setFiles([]);
      
      setTimeout(() => setFeedback(prev => ({ ...prev, visible: false })), 5000);
    } catch (error) {
      setFeedback({
        visible: true,
        success: false,
        message: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Current tab
  const currentTab = tabs.find(tab => tab.value === activeTab) || tabs[0];

  // Field renderers
  const renderCommonFields = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Name</FormLabel>
            <FormControl>
              <Input placeholder="Full Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Your email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const renderBugReportFields = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="componentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Component</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select component" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['Button', 'Card', 'Dialog', 'Dropdown', 'Form Controls', 'Other'].map(item => (
                    <SelectItem key={item.toLowerCase()} value={item.toLowerCase()}>{item}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    { value: 'low', label: 'Low - Minor Issue', color: 'bg-green-500' },
                    { value: 'medium', label: 'Medium - Affects Functionality', color: 'bg-yellow-500' },
                    { value: 'high', label: 'High - Blocks Usage', color: 'bg-orange-500' },
                    { value: 'critical', label: 'Critical - Production Issue', color: 'bg-red-500' }
                  ].map(item => (
                    <SelectItem key={item.value} value={item.value}>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${item.color}`}></div>
                        <span>{item.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bug Summary</FormLabel>
            <FormControl>
              <Input placeholder="Brief description of the issue" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Detailed Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Please describe the bug in detail" rows={4} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="steps"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Steps to Reproduce</FormLabel>
            <FormControl>
              <Textarea
                placeholder="1. First step
2. Second step
3. Third step"
                rows={3}
                {...field}
              />
            </FormControl>
            <FormDescription>List the exact steps needed to reproduce the bug</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['browser', 'os', 'screenSize'].map((name, index) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{name === 'os' ? 'Operating System' : name === 'screenSize' ? 'Screen Size' : 'Browser'}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={name === 'os' ? 'e.g. Windows 11' : name === 'screenSize' ? 'e.g. 1920x1080' : 'e.g. Chrome 112'} 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </>
  );

  const renderFeatureRequestFields = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="componentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Related Component</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select component" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['Button', 'Card', 'Dialog', 'Dropdown', 'Form Controls', 'General Feature', 'Other'].map(item => (
                   <SelectItem key={item.toLowerCase().replace(' ', '-')} value={item.toLowerCase().replace(' ', '-')}>
                   {item}
                 </SelectItem>
               ))}
             </SelectContent>
           </Select>
           <FormMessage />
         </FormItem>
       )}
     />
     <FormField
       control={form.control}
       name="priority"
       render={({ field }) => (
         <FormItem>
           <FormLabel>Priority</FormLabel>
           <Select onValueChange={field.onChange} value={field.value}>
             <FormControl>
               <SelectTrigger>
                 <SelectValue placeholder="How important is this?" />
               </SelectTrigger>
             </FormControl>
             <SelectContent>
               <SelectItem value="low">Nice to Have</SelectItem>
               <SelectItem value="medium">Would Improve Workflow</SelectItem>
               <SelectItem value="high">Critical for My Project</SelectItem>
             </SelectContent>
           </Select>
           <FormMessage />
         </FormItem>
       )}
     />
   </div>
   <FormField
     control={form.control}
     name="subject"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Feature Name</FormLabel>
         <FormControl>
           <Input placeholder="Brief name for the requested feature" {...field} />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="description"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Feature Description</FormLabel>
         <FormControl>
           <Textarea
             placeholder="Please describe the feature in detail. How would it work? What problem does it solve?"
             rows={4}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="useCase"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Use Case</FormLabel>
         <FormControl>
           <Textarea
             placeholder="Describe a specific scenario where this feature would be valuable"
             rows={3}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
 </>
);

const renderComponentRequestFields = () => (
 <>
   <FormField
     control={form.control}
     name="subject"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Component Name</FormLabel>
         <FormControl>
           <Input placeholder="What would you call this component?" {...field} />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="description"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Component Description</FormLabel>
         <FormControl>
           <Textarea
             placeholder="Please describe the component in detail. What would it do? What problem does it solve?"
             rows={4}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="usageExamples"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Usage Examples</FormLabel>
         <FormControl>
           <Textarea
             placeholder="How would you use this component in your project? Please provide code examples if possible."
             rows={3}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="similarExamples"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Similar Examples</FormLabel>
         <FormControl>
           <Textarea
             placeholder="Are there examples of similar components in other libraries or websites? Please provide links if possible."
             rows={3}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
 </>
);

const renderIdeaPitchFields = () => (
 <>
   <FormField
     control={form.control}
     name="subject"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Idea Title</FormLabel>
         <FormControl>
           <Input placeholder="Give your idea a concise name" {...field} />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="category"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Category</FormLabel>
         <Select onValueChange={field.onChange} value={field.value}>
           <FormControl>
             <SelectTrigger>
               <SelectValue placeholder="Select category" />
             </SelectTrigger>
           </FormControl>
           <SelectContent>
             {['Product Improvement', 'Business Opportunity', 'User Experience', 'Technical Advancement', 'Other'].map(item => (
               <SelectItem key={item.toLowerCase().replace(' ', '-')} value={item.toLowerCase().replace(' ', '-')}>
                 {item}
               </SelectItem>
             ))}
           </SelectContent>
         </Select>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="description"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Detailed Description</FormLabel>
         <FormControl>
           <Textarea
             placeholder="Describe your idea in detail. What problem does it solve? Who would benefit? How could it be implemented?"
             rows={4}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="impact"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Potential Impact</FormLabel>
         <FormControl>
           <Textarea
             placeholder="How would this idea impact users, developers, or the business? Try to quantify if possible."
             rows={3}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
 </>
);

const renderContactDevFields = () => (
 <>
   <FormField
     control={form.control}
     name="subject"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Subject</FormLabel>
         <FormControl>
           <Input placeholder="Brief subject of your message" {...field} />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="topic"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Topic</FormLabel>
         <Select onValueChange={field.onChange} value={field.value}>
           <FormControl>
             <SelectTrigger>
               <SelectValue placeholder="Select topic" />
             </SelectTrigger>
           </FormControl>
           <SelectContent>
             {['Documentation Question', 'Implementation Help', 'Technical Question', 'License Inquiry', 'Other'].map(item => (
               <SelectItem key={item.toLowerCase().replace(' ', '-')} value={item.toLowerCase().replace(' ', '-')}>
                 {item}
               </SelectItem>
             ))}
           </SelectContent>
         </Select>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="description"
     render={({ field }) => (
       <FormItem>
         <FormLabel>Message</FormLabel>
         <FormControl>
           <Textarea
             placeholder="Your message to the development team"
             rows={4}
             {...field}
           />
         </FormControl>
         <FormMessage />
       </FormItem>
     )}
   />
   <FormField
     control={form.control}
     name="isUrgent"
     render={({ field }) => (
       <FormItem className="flex flex-row items-start space-x-3 space-y-0">
         <FormControl>
           <Checkbox checked={field.value} onCheckedChange={field.onChange} />
         </FormControl>
         <div className="space-y-1 leading-none">
           <FormLabel>Mark as urgent</FormLabel>
           <FormDescription>Only select this for time-sensitive issues</FormDescription>
         </div>
       </FormItem>
     )}
   />
 </>
);

// File upload section
const renderFileUpload = () => (
 <div>
   <Label htmlFor="attachments" className="block mb-2">Attachments (Optional)</Label>
   <div 
     {...getRootProps()} 
     className={cn(
       "border-2 border-dashed rounded-md p-6 transition-colors cursor-pointer",
       isDragActive ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50"
     )}
   >
     <input {...getInputProps()} id="attachments" />
     <div className="flex flex-col items-center justify-center text-center">
       <Upload className="h-10 w-10 text-muted-foreground mb-2" />
       <p className="text-sm font-medium">
         Drag & drop files here, or click to select files
       </p>
       <p className="text-xs text-muted-foreground mt-1">
         (Maximum 5 files, 5MB each. Supported formats: Images, PDF, TXT, JSON)
       </p>
     </div>
   </div>
   
   {files.length > 0 && (
     <div className="mt-4 space-y-2">
       <Label>Attached Files:</Label>
       <ul className="space-y-2">
         {files.map((file) => (
           <li 
             key={file.name} 
             className="flex items-center justify-between bg-slate-50 p-2 rounded-md"
           >
             <div className="flex items-center space-x-2">
               <FileCode className="h-4 w-4 text-muted-foreground" />
               <span className="text-sm truncate max-w-[200px]">{file.name}</span>
               <span className="text-xs text-muted-foreground">
                 ({Math.round(file.size / 1024)} KB)
               </span>
             </div>
             <Button 
               type="button" 
               variant="ghost" 
               size="sm" 
               onClick={() => removeFile(file)}
               className="h-6 w-6 p-0"
             >
               <X className="h-4 w-4" />
               <span className="sr-only">Remove file</span>
             </Button>
           </li>
         ))}
       </ul>
     </div>
   )}
 </div>
);

return (
 <div className="w-full bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
   <div className="container py-10 max-w-4xl mx-auto">
     <div className="text-center mb-8">
       <h1 className="text-4xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
         Customer Portal
       </h1>
       <p className="text-muted-foreground text-lg">Submit requests and contact our team</p>
     </div>

     {feedback.visible && (
       <Alert 
         variant={feedback.success ? "default" : "destructive"} 
         className="mb-6 animate-in fade-in-50 duration-300"
       >
         {feedback.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
         <AlertTitle>{feedback.success ? "Success!" : "Error"}</AlertTitle>
         <AlertDescription>{feedback.message}</AlertDescription>
       </Alert>
     )}

     <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as TabType)} className="w-full">
       <TabsList className="grid grid-cols-5 mb-8">
         {tabs.map(tab => (
           <TabsTrigger 
             key={tab.value} 
             value={tab.value} 
             className="flex flex-col py-2 items-center gap-2"
           >
             {tab.icon}
             <span>{tab.label}</span>
           </TabsTrigger>
         ))}
       </TabsList>

       {tabs.map(tab => (
         <TabsContent key={tab.value} value={tab.value}>
           <Card className={`shadow-lg border-slate-200 transition-all duration-300 hover:shadow-xl overflow-hidden`}>
             <div className={`h-2 w-full bg-gradient-to-r ${tab.color}`}></div>
             <CardHeader>
               <CardTitle className="text-2xl">{tab.title}</CardTitle>
               <CardDescription className="text-base">{tab.description}</CardDescription>
             </CardHeader>
             
             <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)}>
                 <CardContent className="space-y-6">
                   {/* Personal Information */}
                   {renderCommonFields()}
                   
                   {/* Tab-specific fields */}
                   {activeTab === 'bug-report' && renderBugReportFields()}
                   {activeTab === 'feature-request' && renderFeatureRequestFields()}
                   {activeTab === 'component-request' && renderComponentRequestFields()}
                   {activeTab === 'idea-pitch' && renderIdeaPitchFields()}
                   {activeTab === 'contact-dev' && renderContactDevFields()}
                   
                   {/* File Upload Section */}
                   {renderFileUpload()}
                 </CardContent>
                 
                 <CardFooter className="flex justify-between border-t px-6 py-4 bg-slate-50">
                   <TooltipProvider>
                     <Tooltip>
                       <TooltipTrigger asChild>
                         <Button variant="outline" type="button">
                           <Info className="h-4 w-4 mr-2" />
                           Help
                         </Button>
                       </TooltipTrigger>
                       <TooltipContent className="max-w-xs">
                         <p>Need assistance with your submission? Contact our support team at support@seraui.com</p>
                       </TooltipContent>
                     </Tooltip>
                   </TooltipProvider>
                   
                   <Button 
                     type="submit" 
                     className={`min-w-[120px] bg-gradient-to-r ${tab.color} hover:opacity-90`}
                     disabled={isSubmitting}
                   >
                     {isSubmitting ? (
                       <>
                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                         Submitting...
                       </>
                     ) : (
                       tab.submitLabel
                     )}
                   </Button>
                 </CardFooter>
               </form>
             </Form>
           </Card>
         </TabsContent>
       ))}
     </Tabs>
   </div>
 </div>
);
};

export default CustomerPortal;