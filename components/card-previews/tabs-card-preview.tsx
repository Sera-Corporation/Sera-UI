"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsCardPreview() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-[250px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-2">
        <p className="text-xs">Account settings</p>
      </TabsContent>
      <TabsContent value="password" className="hidden">
        <p className="text-xs">Password settings</p>
      </TabsContent>
    </Tabs>
  )
}

