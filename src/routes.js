/*!

=========================================================
* Material Dashboard React - v1.9.0 
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Book from "@material-ui/icons/Book";
import MeetingRoom from "@material-ui/icons/MeetingRoom";
import Event from "@material-ui/icons/Event";
import Assessment from "@material-ui/icons/Assessment";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

import Resources from "views/Resources/Resources.js";
import Data from "views/Data/Data.js";
import Blog from "views/Blog/Blog.js";
import Meetings from "views/Meetings/Meetings.js";
import Events from "views/Events/Events.js";
import Calendar from "views/Calendar/Calendar.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/blog",
    name: "Blogs",
    icon: Book,
    component: Blog,
    layout: "/admin",
  },
  {
    path: "/meetings",
    name: "Meetings",
    icon: MeetingRoom,
    component: Meetings,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    icon: Event,
    component: Events,
    layout: "/admin",
  },
  {
    path: "/data",
    name: "Data",
    icon: Assessment,
    component: Data,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "خرائط",
    icon: CalendarToday,
    component: Calendar,
    layout: "/admin",
  },
  {
    path: "/resources",
    name: "Resources",
    icon: BubbleChart,
    component: Resources,
    layout: "/admin",
  },

  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },

  {
    path: "/userprofile",
    name: "User Profile",
    rtlName: "إخطارات",
    icon: Unarchive,
    component: UserProfile,
    layout: "/admin",
  },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
