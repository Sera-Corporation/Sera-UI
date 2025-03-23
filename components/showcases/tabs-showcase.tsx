"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Settings, User, Home, Mail, Bell } from "lucide-react"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TabsShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-medium">Basic Tabs</h3>
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Current password
                  </label>
                  <input
                    type="password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    New password
                  </label>
                  <input
                    type="password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="notifications"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enable notifications
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subscribe to newsletter
                  </label>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">Icon Tabs</h3>
        <AnimatedIconTabs />
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">Vertical Tabs</h3>
        <VerticalTabs />
      </div>
    </div>
  )
}

function AnimatedIconTabs() {
  const [activeTab, setActiveTab] = React.useState("home")

  return (
    <div className="w-full max-w-3xl">
      <div className="flex space-x-1 rounded-xl bg-muted p-1">
        <TabButton
          isActive={activeTab === "home"}
          onClick={() => setActiveTab("home")}
          icon={<Home className="h-4 w-4" />}
        >
          Home
        </TabButton>
        <TabButton
          isActive={activeTab === "messages"}
          onClick={() => setActiveTab("messages")}
          icon={<Mail className="h-4 w-4" />}
        >
          Messages
        </TabButton>
        <TabButton
          isActive={activeTab === "notifications"}
          onClick={() => setActiveTab("notifications")}
          icon={<Bell className="h-4 w-4" />}
        >
          Notifications
        </TabButton>
        <TabButton
          isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
          icon={<User className="h-4 w-4" />}
        >
          Profile
        </TabButton>
        <TabButton
          isActive={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
          icon={<Settings className="h-4 w-4" />}
        >
          Settings
        </TabButton>
      </div>
      <div className="mt-4 rounded-lg border p-4">
        {activeTab === "home" && <div>Home content</div>}
        {activeTab === "messages" && <div>Messages content</div>}
        {activeTab === "notifications" && <div>Notifications content</div>}
        {activeTab === "profile" && <div>Profile content</div>}
        {activeTab === "settings" && <div>Settings content</div>}
      </div>
    </div>
  )
}

interface TabButtonProps {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
  icon?: React.ReactNode
}

function TabButton({ children, isActive, onClick, icon }: TabButtonProps) {
  return (
    <button
      className={cn(
        "relative flex flex-1 items-center justify-center space-x-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
        isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
      )}
      onClick={onClick}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-lg bg-primary"
          transition={{ type: "spring", duration: 0.6 }}
        />
      )}
      <span className="relative flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </button>
  )
}

function VerticalTabs() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Tabs defaultValue="general" orientation="vertical" className="w-full">
        <div className="flex">
          <TabsList className="mr-4 h-auto flex-col justify-start">
            <TabsTrigger value="general" className="justify-start">
              General
            </TabsTrigger>
            <TabsTrigger value="appearance" className="justify-start">
              Appearance
            </TabsTrigger>
            <TabsTrigger value="notifications" className="justify-start">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="display" className="justify-start">
              Display
            </TabsTrigger>
          </TabsList>
          <div className="flex-1">
            <TabsContent value="general" className="mt-0 border-0 p-0">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Manage your general account settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <label className="text-sm font-medium leading-none">Language</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="appearance" className="mt-0 border-0 p-0">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the look and feel of the interface.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <label className="text-sm font-medium leading-none">Theme</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>System</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="mt-0 border-0 p-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Configure how you receive notifications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="email-notifications"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="email-notifications" className="text-sm font-medium">
                        Email notifications
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="push-notifications"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="push-notifications" className="text-sm font-medium">
                        Push notifications
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="display" className="mt-0 border-0 p-0">
              <Card>
                <CardHeader>
                  <CardTitle>Display Settings</CardTitle>
                  <CardDescription>Adjust how content is displayed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Density</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option>Comfortable</option>
                        <option>Compact</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

