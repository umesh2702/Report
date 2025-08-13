"use client"

import { useState, useMemo } from "react"

const recentReportsData = [
  {
    id: 1,
    name: "Q1 Emissions Summary",
    client: "Vanenburg solutions",
    type: "Emissions Summary",
    generatedBy: { name: "Alex Morgan", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Apr 28, 2025",
    dateObj: new Date("2025-04-28"),
    status: "Complete",
  },
  {
    id: 2,
    name: "Q1 Emissions Summary",
    client: "Houchwald GmbH",
    type: "Emissions Summary",
    generatedBy: { name: "Jackson M", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Apr 28, 2025",
    dateObj: new Date("2025-04-28"),
    status: "Complete",
  },
  {
    id: 3,
    name: "Q2 Emissions Summary",
    client: "Houchwald GmbH",
    type: "Emissions Summary",
    generatedBy: { name: "Jordan Lee", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Jul 15, 2025",
    dateObj: new Date("2025-07-15"),
    status: "In Progress",
  },
  {
    id: 4,
    name: "Q3 Emissions Summary",
    client: "Clearthinking Ltd",
    type: "Emissions Summary",
    generatedBy: { name: "Samantha Wang", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Oct 10, 2025",
    dateObj: new Date("2025-10-10"),
    status: "Pending",
  },
  {
    id: 5,
    name: "Q4 Emissions Summary",
    client: "Vanenburg solutions",
    type: "Emissions Summary",
    generatedBy: { name: "Chris Johnson", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Jan 5, 2026",
    dateObj: new Date("2026-01-05"),
    status: "Not Started",
  },
  {
    id: 6,
    name: "Annual Carbon Report",
    client: "GreenTech Industries",
    type: "Annual Report",
    generatedBy: { name: "Sarah Chen", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Mar 15, 2025",
    dateObj: new Date("2025-03-15"),
    status: "Complete",
  },
  {
    id: 7,
    name: "Sustainability Metrics",
    client: "EcoSolutions Corp",
    type: "Sustainability Report",
    generatedBy: { name: "Michael Brown", avatar: "/placeholder.svg?height=32&width=32" },
    date: "May 20, 2025",
    dateObj: new Date("2025-05-20"),
    status: "Complete",
  },
  {
    id: 8,
    name: "Carbon Footprint Analysis",
    client: "CleanEnergy Ltd",
    type: "Analysis Report",
    generatedBy: { name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Jun 10, 2025",
    dateObj: new Date("2025-06-10"),
    status: "In Progress",
  },
  {
    id: 9,
    name: "Q2 Sustainability Report",
    client: "GreenTech Industries",
    type: "Sustainability Report",
    generatedBy: { name: "David Kim", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Aug 5, 2025",
    dateObj: new Date("2025-08-05"),
    status: "Pending",
  },
  {
    id: 10,
    name: "Environmental Impact Study",
    client: "EcoSolutions Corp",
    type: "Impact Study",
    generatedBy: { name: "Lisa Zhang", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Sep 12, 2025",
    dateObj: new Date("2025-09-12"),
    status: "In Progress",
  },
  {
    id: 11,
    name: "Q3 Carbon Assessment",
    client: "CleanEnergy Ltd",
    type: "Assessment Report",
    generatedBy: { name: "Robert Taylor", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Nov 8, 2025",
    dateObj: new Date("2025-11-08"),
    status: "Not Started",
  },
  {
    id: 12,
    name: "Year-End Emissions Report",
    client: "Vanenburg solutions",
    type: "Emissions Summary",
    generatedBy: { name: "Jennifer Adams", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Dec 20, 2025",
    dateObj: new Date("2025-12-20"),
    status: "Not Started",
  },
  {
    id: 13,
    name: "Renewable Energy Analysis",
    client: "GreenTech Industries",
    type: "Energy Report",
    generatedBy: { name: "Mark Johnson", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Feb 14, 2025",
    dateObj: new Date("2025-02-14"),
    status: "Complete",
  },
  {
    id: 14,
    name: "Waste Management Report",
    client: "EcoSolutions Corp",
    type: "Management Report",
    generatedBy: { name: "Anna Martinez", avatar: "/placeholder.svg?height=32&width=32" },
    date: "Apr 3, 2025",
    dateObj: new Date("2025-04-03"),
    status: "Complete",
  },
  {
    id: 15,
    name: "Water Usage Assessment",
    client: "CleanEnergy Ltd",
    type: "Usage Report",
    generatedBy: { name: "Tom Wilson", avatar: "/placeholder.svg?height=32&width=32" },
    date: "May 25, 2025",
    dateObj: new Date("2025-05-25"),
    status: "In Progress",
  },
]

const scheduledReportsData = [
  {
    id: 1,
    name: "Monthly Emissions Report",
    account: "Vanenburg solutions",
    frequency: "Monthly",
    recipients: [
      { avatar: "/placeholder.svg?height=24&width=24" },
      { avatar: "/placeholder.svg?height=24&width=24" },
      { avatar: "/placeholder.svg?height=24&width=24" },
    ],
    nextRun: "Monthly",
    status: "Not Started",
  },
  {
    id: 2,
    name: "Quarterly Sustainability Report",
    account: "GreenTech Industries",
    frequency: "Quarterly",
    recipients: [{ avatar: "/placeholder.svg?height=24&width=24" }, { avatar: "/placeholder.svg?height=24&width=24" }],
    nextRun: "Quarterly",
    status: "Complete",
  },
  {
    id: 3,
    name: "Weekly Carbon Tracking",
    account: "EcoSolutions Corp",
    frequency: "Weekly",
    recipients: [
      { avatar: "/placeholder.svg?height=24&width=24" },
      { avatar: "/placeholder.svg?height=24&width=24" },
      { avatar: "/placeholder.svg?height=24&width=24" },
      { avatar: "/placeholder.svg?height=24&width=24" },
    ],
    nextRun: "Weekly",
    status: "In Progress",
  },
  {
    id: 4,
    name: "Annual Environmental Impact",
    account: "CleanEnergy Ltd",
    frequency: "Annually",
    recipients: [{ avatar: "/placeholder.svg?height=24&width=24" }],
    nextRun: "Annually",
    status: "Pending",
  },
  {
    id: 5,
    name: "Bi-weekly Energy Usage",
    account: "Houchwald GmbH",
    frequency: "Bi-weekly",
    recipients: [
      { avatar: "/placeholder.svg?height=24&width=24" },
      { avatar: "/placeholder.svg?height=24&width=24" },
      { avatar: "/placeholder.svg?height=24&width=24" },
    ],
    nextRun: "Bi-weekly",
    status: "Complete",
  },
  {
    id: 6,
    name: "Monthly Water Assessment",
    account: "Clearthinking Ltd",
    frequency: "Monthly",
    recipients: [{ avatar: "/placeholder.svg?height=24&width=24" }, { avatar: "/placeholder.svg?height=24&width=24" }],
    nextRun: "Monthly",
    status: "Not Started",
  },
]

const Button = ({ children, className = "", variant = "default", size = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Avatar = ({ children, className = "" }) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>
)

const AvatarImage = ({ src, alt = "" }) => (
  <img className="aspect-square h-full w-full" src={src || "/placeholder.svg"} alt={alt} />
)

const AvatarFallback = ({ children, className = "" }) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>{children}</div>
)

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Complete":
        return "bg-green-50 text-green-700 border-green-200"
      case "In Progress":
        return "bg-orange-50 text-orange-700 border-orange-200"
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "Not Started":
        return "bg-gray-50 text-gray-700 border-gray-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getDotColor = (status) => {
    switch (status) {
      case "Complete":
        return "bg-green-500"
      case "In Progress":
        return "bg-orange-500"
      case "Pending":
        return "bg-yellow-500"
      case "Not Started":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${getDotColor(status)}`} />
      <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(status)}`}>{status}</span>
    </div>
  )
}

const DateRangePicker = ({ startDate, endDate, onStartDateChange, onEndDateChange, onClear }) => {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="text-sm border border-gray-200 rounded-md px-3 py-1.5 bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Start date"
          />
        </div>

        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-gray-400 rounded"></div>
        </div>

        <div className="relative">
          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="text-sm border border-gray-200 rounded-md px-3 py-1.5 bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="End date"
          />
        </div>
      </div>

      {(startDate || endDate) && (
        <button
          onClick={onClear}
          className="ml-2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          title="Clear date range"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default function ReportScreen() {
  const [selectedClient, setSelectedClient] = useState("All clients")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [recentReportsPage, setRecentReportsPage] = useState(1)
  const [scheduledReportsPage, setScheduledReportsPage] = useState(1)
  const itemsPerPage = 5

  const filteredReports = useMemo(() => {
    let filtered = recentReportsData

    if (startDate || endDate) {
      filtered = recentReportsData.filter((report) => {
        const reportDate = report.dateObj
        const start = startDate ? new Date(startDate) : null
        const end = endDate ? new Date(endDate) : null

        if (start && end) {
          return reportDate >= start && reportDate <= end
        } else if (start) {
          return reportDate >= start
        } else if (end) {
          return reportDate <= end
        }
        return true
      })
    }

    return filtered
  }, [startDate, endDate])

  const paginatedRecentReports = useMemo(() => {
    const startIndex = (recentReportsPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredReports.slice(startIndex, endIndex)
  }, [filteredReports, recentReportsPage])

  const paginatedScheduledReports = useMemo(() => {
    const startIndex = (scheduledReportsPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return scheduledReportsData.slice(startIndex, endIndex)
  }, [scheduledReportsPage])

  const handleClearDateRange = () => {
    setStartDate("")
    setEndDate("")
    setRecentReportsPage(1)
  }

  const handleRecentReportsNext = () => {
    const totalPages = Math.ceil(filteredReports.length / itemsPerPage)
    if (recentReportsPage < totalPages) {
      setRecentReportsPage(recentReportsPage + 1)
    }
  }

  const handleRecentReportsPrevious = () => {
    if (recentReportsPage > 1) {
      setRecentReportsPage(recentReportsPage - 1)
    }
  }

  const handleScheduledReportsNext = () => {
    const totalPages = Math.ceil(scheduledReportsData.length / itemsPerPage)
    if (scheduledReportsPage < totalPages) {
      setScheduledReportsPage(scheduledReportsPage + 1)
    }
  }

  const handleScheduledReportsPrevious = () => {
    if (scheduledReportsPage > 1) {
      setScheduledReportsPage(scheduledReportsPage - 1)
    }
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Made independent with full-height border */}
      <div
        className={`${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white flex flex-col min-h-screen transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <span className="font-semibold text-gray-900 text-lg">conil</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pb-4">
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v6m8-6v6" />
              </svg>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
              </svg>
              <span className="text-sm font-medium">Projects</span>
            </a>

            <div className="py-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">CLIENTS</div>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Clients</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-white bg-purple-600 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm font-medium">Reports</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Team</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="text-sm font-medium">Payments & Billings</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-sm font-medium">Company Settings</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
                <span className="text-sm font-medium">General Settings</span>
              </a>
            </div>
          </div>
        </nav>

        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <h1 className="text-xl font-semibold text-gray-900">Carbon accounting firm</h1>
              <Button className="bg-green-600 hover:bg-green-700 text-white hidden sm:flex">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Client
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7a12 12 0 0124 0v10z"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 bg-white overflow-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
              />
            </svg>
            <span>Reports</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">Reports</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onClear={handleClearDateRange}
              />
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors">
                  {selectedClient}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors">
                  Create New Report
                </button>
              </div>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="rounded-lg border border-gray-200 mb-8 bg-white shadow-sm">
            <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
                {(startDate || endDate) && (
                  <span className="text-sm text-gray-500">
                    Showing {filteredReports.length} of {recentReportsData.length} reports
                  </span>
                )}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Report Name
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Generated By
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedRecentReports.length > 0 ? (
                    paginatedRecentReports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50">
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                          {report.name}
                        </td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 cursor-pointer text-left">
                          {report.client}
                        </td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                          {report.type}
                        </td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-left">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={report.generatedBy.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs">
                                {report.generatedBy.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-900 hidden sm:inline">{report.generatedBy.name}</span>
                          </div>
                        </td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                          {report.date}
                        </td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-left">
                          <StatusBadge status={report.status} />
                        </td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                />
                              </svg>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="px-4 lg:px-6 py-8 text-center text-sm text-gray-500">
                        No reports found for the selected date range
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="px-4 lg:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                Showing {(recentReportsPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(recentReportsPage * itemsPerPage, filteredReports.length)} of {filteredReports.length} reports
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRecentReportsPrevious}
                  disabled={recentReportsPage === 1}
                  className={recentReportsPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRecentReportsNext}
                  disabled={recentReportsPage >= Math.ceil(filteredReports.length / itemsPerPage)}
                  className={
                    recentReportsPage >= Math.ceil(filteredReports.length / itemsPerPage)
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* Scheduled Reports */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="px-4 lg:px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900">Scheduled Reports</h3>
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 bg-gray-50 border-gray-300 hover:bg-gray-100"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Schedule New
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Report Name
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Account
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recipients
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Next Run
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedScheduledReports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                        {report.name}
                      </td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                        {report.account}
                      </td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                        {report.frequency}
                      </td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-left">
                        <div className="flex items-center gap-1">
                          {report.recipients.slice(0, 3).map((recipient, index) => (
                            <Avatar key={index} className="w-6 h-6">
                              <AvatarImage src={recipient.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs">U</AvatarFallback>
                            </Avatar>
                          ))}
                          {report.recipients.length > 3 && (
                            <span className="text-xs text-gray-500 ml-1">+{report.recipients.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                        {report.nextRun}
                      </td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-left">
                        <StatusBadge status={report.status} />
                      </td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 lg:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                Showing {(scheduledReportsPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(scheduledReportsPage * itemsPerPage, scheduledReportsData.length)} of{" "}
                {scheduledReportsData.length} reports
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleScheduledReportsPrevious}
                  disabled={scheduledReportsPage === 1}
                  className={scheduledReportsPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleScheduledReportsNext}
                  disabled={scheduledReportsPage >= Math.ceil(scheduledReportsData.length / itemsPerPage)}
                  className={
                    scheduledReportsPage >= Math.ceil(scheduledReportsData.length / itemsPerPage)
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
