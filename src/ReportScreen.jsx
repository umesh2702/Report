"use client"

import { useState, useMemo } from "react"
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Users,
  CreditCard,
  Building2,
  Settings,
  Plus,
  Search,
  Bell,
  HelpCircle,
  Home,
  Download,
  Share2,
  MoreHorizontal,
  Edit,
  Trash2,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

const recentReportsData = [
  {
    id: 1,
    name: "Q1 Emissions Summary",
    client: "Vanenburg solutions",
    type: "Emissions Summary",
    generatedBy: { name: "Alex Morgan", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
    date: "Apr 28, 2025",
    dateObj: new Date("2025-04-28"),
    status: "Complete",
  },
  {
    id: 2,
    name: "Q1 Emissions Summary",
    client: "Houchwald GmbH",
    type: "Emissions Summary",
    generatedBy: { name: "Jackson M", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
    date: "Apr 28, 2025",
    dateObj: new Date("2025-04-28"),
    status: "Complete",
  },
  {
    id: 3,
    name: "Q2 Emissions Summary",
    client: "Houchwald GmbH",
    type: "Emissions Summary",
    generatedBy: { name: "Jordan Lee", avatar: "/placeholder.svg?height=32&width=32", gender: "female" },
    date: "Jul 15, 2025",
    dateObj: new Date("2025-07-15"),
    status: "In Progress",
  },
  {
    id: 4,
    name: "Q3 Emissions Summary",
    client: "Clearthinking Ltd",
    type: "Emissions Summary",
    generatedBy: { name: "Samantha Wang", avatar: "/placeholder.svg?height=32&width=32", gender: "female" },
    date: "Oct 10, 2025",
    dateObj: new Date("2025-10-10"),
    status: "Pending",
  },
  {
    id: 5,
    name: "Q4 Emissions Summary",
    client: "Vanenburg solutions",
    type: "Emissions Summary",
    generatedBy: { name: "Chris Johnson", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
    date: "Jan 5, 2026",
    dateObj: new Date("2026-01-05"),
    status: "Not Started",
  },
  {
    id: 6,
    name: "Annual Carbon Report",
    client: "GreenTech Industries",
    type: "Annual Report",
    generatedBy: { name: "Sarah Chen", avatar: "/placeholder.svg?height=32&width=32", gender: "female" },
    date: "Mar 15, 2025",
    dateObj: new Date("2025-03-15"),
    status: "Complete",
  },
  {
    id: 7,
    name: "Sustainability Metrics",
    client: "EcoSolutions Corp",
    type: "Sustainability Report",
    generatedBy: { name: "Michael Brown", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
    date: "May 20, 2025",
    dateObj: new Date("2025-05-20"),
    status: "Complete",
  },
  {
    id: 8,
    name: "Carbon Footprint Analysis",
    client: "CleanEnergy Ltd",
    type: "Analysis Report",
    generatedBy: { name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32", gender: "female" },
    date: "Jun 10, 2025",
    dateObj: new Date("2025-06-10"),
    status: "In Progress",
  },
  {
    id: 9,
    name: "Q2 Sustainability Report",
    client: "GreenTech Industries",
    type: "Sustainability Report",
    generatedBy: { name: "David Kim", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
    date: "Aug 5, 2025",
    dateObj: new Date("2025-08-05"),
    status: "Pending",
  },
  {
    id: 10,
    name: "Environmental Impact Study",
    client: "EcoSolutions Corp",
    type: "Impact Study",
    generatedBy: { name: "Lisa Zhang", avatar: "/placeholder.svg?height=32&width=32", gender: "female" },
    date: "Sep 12, 2025",
    dateObj: new Date("2025-09-12"),
    status: "In Progress",
  },
  {
    id: 11,
    name: "Q3 Carbon Assessment",
    client: "CleanEnergy Ltd",
    type: "Assessment Report",
    generatedBy: { name: "Robert Taylor", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
    date: "Nov 8, 2025",
    dateObj: new Date("2025-11-08"),
    status: "Not Started",
  },
  {
    id: 12,
    name: "Year-End Emissions Report",
    client: "Vanenburg solutions",
    type: "Emissions Summary",
    generatedBy: { name: "Jennifer Adams", avatar: "/placeholder.svg?height=32&width=32", gender: "female" },
    date: "Dec 20, 2025",
    dateObj: new Date("2025-12-20"),
    status: "Not Started",
  },
  {
    id: 13,
    name: "Renewable Energy Analysis",
    client: "GreenTech Industries",
    type: "Energy Report",
    generatedBy: { name: "Mark Johnson", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
    date: "Feb 14, 2025",
    dateObj: new Date("2025-02-14"),
    status: "Complete",
  },
  {
    id: 14,
    name: "Waste Management Report",
    client: "EcoSolutions Corp",
    type: "Management Report",
    generatedBy: { name: "Anna Martinez", avatar: "/placeholder.svg?height=32&width=32", gender: "female" },
    date: "Apr 3, 2025",
    dateObj: new Date("2025-04-03"),
    status: "Complete",
  },
  {
    id: 15,
    name: "Water Usage Assessment",
    client: "CleanEnergy Ltd",
    type: "Usage Report",
    generatedBy: { name: "Tom Wilson", avatar: "/placeholder.svg?height=32&width=32", gender: "male" },
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
      { avatar: "/placeholder.svg?height=24&width=24", gender: "male" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "female" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "male" },
    ],
    nextRun: "Monthly",
    status: "Not Started",
  },
  {
    id: 2,
    name: "Quarterly Sustainability Report",
    account: "GreenTech Industries",
    frequency: "Quarterly",
    recipients: [
      { avatar: "/placeholder.svg?height=24&width=24", gender: "female" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "male" },
    ],
    nextRun: "Quarterly",
    status: "Complete",
  },
  {
    id: 3,
    name: "Weekly Carbon Tracking",
    account: "EcoSolutions Corp",
    frequency: "Weekly",
    recipients: [
      { avatar: "/placeholder.svg?height=24&width=24", gender: "male" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "female" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "male" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "female" },
    ],
    nextRun: "Weekly",
    status: "In Progress",
  },
  {
    id: 4,
    name: "Annual Environmental Impact",
    account: "CleanEnergy Ltd",
    frequency: "Annually",
    recipients: [{ avatar: "/placeholder.svg?height=24&width=24", gender: "male" }],
    nextRun: "Annually",
    status: "Pending",
  },
  {
    id: 5,
    name: "Bi-weekly Energy Usage",
    account: "Houchwald GmbH",
    frequency: "Bi-weekly",
    recipients: [
      { avatar: "/placeholder.svg?height=24&width=24", gender: "female" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "male" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "female" },
    ],
    nextRun: "Bi-weekly",
    status: "Complete",
  },
  {
    id: 6,
    name: "Monthly Water Assessment",
    account: "Clearthinking Ltd",
    frequency: "Monthly",
    recipients: [
      { avatar: "/placeholder.svg?height=24&width=24", gender: "male" },
      { avatar: "/placeholder.svg?height=24&width=24", gender: "female" },
    ],
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
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Pending":
        return "bg-orange-50 text-orange-700 border-orange-200"
      case "Not Started":
        return "bg-red-50 text-red-700 border-red-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getDotColor = (status) => {
    switch (status) {
      case "Complete":
        return "bg-green-500"
      case "In Progress":
        return "bg-blue-500"
      case "Pending":
        return "bg-orange-500"
      case "Not Started":
        return "bg-red-500"
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
  const [isClientsOpen, setIsClientsOpen] = useState(true)
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
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">conil</span>
          </div>
        </div>

        <nav className="flex-1 px-4 pb-4">
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-white bg-[#462D7E] rounded-lg">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FolderOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Projects</span>
            </a>

            <div className="py-2">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">CLIENTS</div>
                <button
                  onClick={() => setIsClientsOpen(!isClientsOpen)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {isClientsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>

              {isClientsOpen && (
                <div className="ml-6 space-y-1">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">C</span>
                    </div>
                    <span className="text-sm font-medium">Clearthinking Enterp...</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">V</span>
                    </div>
                    <span className="text-sm font-medium">Vanenburg Solutions</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">C1</span>
                    </div>
                    <span className="text-sm font-medium">Client1</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">C2</span>
                    </div>
                    <span className="text-sm font-medium">Client2</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">C3</span>
                    </div>
                    <span className="text-sm font-medium">Client3</span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Reports</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-sm font-bold">MANAGE</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Team</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-medium">Payments & Billings</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">Company Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">General Settings</span>
            </a>
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
              <Button className="!bg-[#4CAF50] hover:!bg-[#45a049] !text-white hidden sm:flex">
                <Plus className="w-4 h-4 mr-2" />
                Add Client
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <HelpCircle className="w-5 h-5" />
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
            <Home className="w-4 h-4" />
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
                <button className="inline-flex items-center px-4 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors">
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
                              <AvatarImage
                                src={`/placeholder.svg?height=32&width=32&query=${report.generatedBy.gender === "male" ? "professional male avatar" : "professional female avatar"}`}
                              />
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
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                              <MoreHorizontal className="w-4 h-4" />
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
                <Plus className="w-4 h-4 mr-2" />
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
                              <AvatarImage
                                src={`/placeholder.svg?height=24&width=24&query=${recipient.gender === "male" ? "professional male avatar" : "professional female avatar"}`}
                              />
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
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                            <Trash2 className="w-4 h-4" />
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
