import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  CalendarClock,
  Mail,
  Package,
  BookOpen,
  FileText,
  Users,
  MessageSquareQuote,
  Settings,
  ScrollText,
  BarChart3,
  HelpCircle,
  ListChecks,
  GraduationCap,
  KeyRound,
} from "lucide-react";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Built in a later 4x sub-phase; rendered disabled until then. */
  comingSoon?: boolean;
};

export type AdminNavGroup = {
  heading: string;
  items: AdminNavItem[];
};

/**
 * Admin navigation. Items marked `comingSoon` are placeholders for screens that
 * land in Phase 4B/4C/4D; they render but are visibly disabled so the shell is
 * complete from 4A onward without dead links.
 */
export const adminNav: AdminNavGroup[] = [
  {
    heading: "Overview",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    ],
  },
  {
    heading: "Leads",
    items: [
      { label: "Consultations", href: "/admin/consultations", icon: CalendarClock },
      { label: "Contact Requests", href: "/admin/contact-requests", icon: Mail },
      { label: "Package Inquiries", href: "/admin/package-inquiries", icon: Package },
      { label: "Newsletter", href: "/admin/newsletter", icon: Users },
    ],
  },
  {
    heading: "Students",
    items: [
      { label: "Students", href: "/admin/students", icon: GraduationCap },
      { label: "Access Requests", href: "/admin/access-requests", icon: KeyRound },
    ],
  },
  {
    heading: "Content",
    items: [
      { label: "Books", href: "/admin/books", icon: BookOpen },
      { label: "Resources", href: "/admin/resources", icon: FileText },
      { label: "Question Bank", href: "/admin/question-bank", icon: ListChecks },
      { label: "Packages", href: "/admin/packages", icon: Package },
      { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
      { label: "FAQs", href: "/admin/faqs", icon: HelpCircle },
    ],
  },
  {
    heading: "System",
    items: [
      { label: "Settings", href: "/admin/settings", icon: Settings },
      { label: "Audit Logs", href: "/admin/audit-logs", icon: ScrollText },
    ],
  },
];
