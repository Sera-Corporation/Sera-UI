"use client"
import type * as React from "react"
import Link from "next/link"
import Image from "next/image"

// Layout Showcases - Full versions for the dialog
export function SimpleNavbarShowcase() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <span className="font-bold text-xl">Logo</span>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Services
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Contact
        </Link>
      </div>
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  )
}

export function CenteredHeroShowcase() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Beautiful UI Components</h1>
      <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
        A collection of beautifully designed components that you can copy and paste into your apps.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Get Started
        </button>
        <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          Learn More
        </button>
      </div>
    </div>
  )
}

export function SplitHeroShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center py-16">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Modern UI Components</h1>
        <p className="text-xl text-muted-foreground">
          A collection of beautifully designed components that you can copy and paste into your apps.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Get Started
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative h-[300px] md:h-[400px]">
        <Image src="/placeholder.svg?height=500&width=500" alt="Hero Image" fill className="object-cover rounded-lg" />
      </div>
    </div>
  )
}

export function SimpleFooterShowcase() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="font-bold">Your Company</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export function MultiColumnFooterShowcase() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Your Company</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Making the world a better place through beautifully designed components.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Product 1
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Product 2
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Product 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ResponsiveGridShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Item {i + 1}</h3>
          <p className="text-sm text-muted-foreground">
            This is a description for item {i + 1}. It contains some text to demonstrate the layout.
          </p>
        </div>
      ))}
    </div>
  )
}

export function ContactFormShowcase() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">Fill out the form below to get in touch with us.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-medium leading-none">
              First name
            </label>
            <input
              id="first-name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-medium leading-none">
              Last name
            </label>
            <input
              id="last-name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none">
            Message
          </label>
          <textarea
            id="message"
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type your message here."
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export function SignupFormShowcase() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-muted-foreground">Enter your information to create an account</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none">
            Name
          </label>
          <input
            id="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Password
            </label>
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Create account
        </button>
      </form>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="#" className="text-primary hover:underline">
          Sign in
        </a>
      </div>
    </div>
  )
}

export function SplitAuthFormShowcase() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-[500px] lg:grid-cols-12">
        <aside className="relative block h-32 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Authentication form background"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="#">
              <span className="sr-only">Home</span>
              <svg className="h-8 sm:h-10" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Welcome to Squid 🦑</h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam
              voluptatum.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

export function SplitAuthFormCardPreview() {
  return (
    <div className="w-full max-w-[250px] bg-white">
      <div className="grid grid-cols-12 h-40">
        <div className="col-span-5 bg-gray-300 h-full">
          <div className="w-full h-full bg-gray-400"></div>
        </div>
        <div className="col-span-7 p-2 flex flex-col">
          <div className="text-blue-600 mb-1">
            <svg className="h-4 w-4" viewBox="0 0 28 24" fill="none">
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 className="text-xs font-bold mb-1">Welcome to Squid 🦑</h3>
          <div className="space-y-1 flex-grow">
            <div className="grid grid-cols-2 gap-1">
              <input className="border rounded text-[8px] p-0.5" placeholder="First Name" />
              <input className="border rounded text-[8px] p-0.5" placeholder="Last Name" />
            </div>
            <button className="bg-blue-600 text-white text-[8px] rounded px-2 py-0.5 mt-1">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const SimpleNavbarCardPreview = () => (
  <div className="w-full max-w-[250px] bg-white border rounded">
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center">
        <span className="font-bold text-sm">Logo</span>
      </div>
      <button className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
)

const CenteredHeroCardPreview = () => (
  <div className="w-full max-w-[250px] bg-white border rounded p-4">
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold tracking-tight">Headline</h1>
      <p className="mt-2 text-sm text-muted-foreground">Some supporting text to describe the headline.</p>
      <div className="mt-4 flex justify-center gap-2">
        <button className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Action
        </button>
      </div>
    </div>
  </div>
)

const SplitHeroCardPreview = () => (
  <div className="w-full max-w-[350px] bg-white border rounded grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl font-bold">Headline</h2>
      <p className="text-sm text-muted-foreground">Supporting text.</p>
      <button className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-fit">
        Action
      </button>
    </div>
    <div className="relative h-40">
      <Image src="/placeholder.svg?height=500&width=500" alt="Hero Image" fill className="object-cover rounded-lg" />
    </div>
  </div>
)

const SimpleFooterCardPreview = () => (
  <footer className="w-full max-w-[250px] bg-white border rounded py-4">
    <div className="container flex flex-col items-center">
      <span className="font-bold text-sm">Your Company</span>
      <p className="text-muted-foreground text-xs mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
)

const MultiColumnFooterCardPreview = () => (
  <footer className="w-full max-w-[350px] bg-white border rounded py-8">
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold text-sm mb-2">Company</h3>
        <ul className="space-y-1">
          <li>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-sm mb-2">Resources</h3>
        <ul className="space-y-1">
          <li>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Documentation
            </a>
          </li>
          <li>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Tutorials
            </a>
          </li>
          <li>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mt-4 pt-4 border-t">
      <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Your Company</p>
    </div>
  </footer>
)

const ResponsiveGridCardPreview = () => (
  <div className="w-full max-w-[350px] bg-white border rounded grid grid-cols-2 gap-2 p-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="rounded-md border bg-card p-2 shadow-sm">
        <h3 className="text-sm font-semibold mb-1">Item {i + 1}</h3>
        <p className="text-xs text-muted-foreground">Description.</p>
      </div>
    ))}
  </div>
)

const ContactFormCardPreview = () => (
  <div className="w-full max-w-[300px] bg-white border rounded p-4">
    <div className="space-y-2 text-center">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <p className="text-sm text-muted-foreground">Get in touch.</p>
    </div>
    <form className="space-y-3 mt-4">
      <input
        className="flex h-8 w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Email"
        type="email"
      />
      <textarea
        className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Message"
      />
      <button className="inline-flex h-8 w-full items-center justify-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        Send
      </button>
    </form>
  </div>
)

const SignupFormCardPreview = () => (
  <div className="w-full max-w-[300px] bg-white border rounded p-4">
    <div className="space-y-2 text-center">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <p className="text-sm text-muted-foreground">Create an account</p>
    </div>
    <form className="space-y-3 mt-4">
      <input
        className="flex h-8 w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Email"
        type="email"
      />
      <input
        className="flex h-8 w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Password"
        type="password"
      />
      <button className="inline-flex h-8 w-full items-center justify-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        Sign Up
      </button>
    </form>
  </div>
)

// Update the layoutShowcases and layoutCardPreviews objects
export const layoutShowcases: Record<string, React.ComponentType> = {
  "simple-navbar": SimpleNavbarShowcase,
  "centered-hero": CenteredHeroShowcase,
  "split-hero": SplitHeroShowcase,
  "simple-footer": SimpleFooterShowcase,
  "multi-column-footer": MultiColumnFooterShowcase,
  "responsive-grid": ResponsiveGridShowcase,
  "contact-form": ContactFormShowcase,
  "signup-form": SignupFormShowcase,
  "split-auth-form": SplitAuthFormShowcase,
}

export const layoutCardPreviews: Record<string, React.ComponentType> = {
  "simple-navbar": SimpleNavbarCardPreview,
  "centered-hero": CenteredHeroCardPreview,
  "split-hero": SplitHeroCardPreview,
  "simple-footer": SimpleFooterCardPreview,
  "multi-column-footer": MultiColumnFooterCardPreview,
  "responsive-grid": ResponsiveGridCardPreview,
  "contact-form": ContactFormCardPreview,
  "signup-form": SignupFormCardPreview,
  "split-auth-form": SplitAuthFormCardPreview,
}

