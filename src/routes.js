/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Gas from "./DataVizMain/Gas/Gas";
import Rainfall from "./DataVizMain/Rainfall/Rainfall";
import Temp from "./DataVizMain/Temp/Temp";


const dashboardRoutes = [
  {
    path: "/greenhouse-gas",
    name: "Greenhouse Gas",
    icon: "pe-7s-graph",
    component: Gas,
    layout: "/admin"
  },
  {
    path: "/rainfall",
    name: "Rainfall",
    icon: "pe-7s-cloud",
    component: Rainfall,
    layout: "/admin"
  },
  {
    path: "/temp",
    name: "Temperature",
    icon: "pe-7s-sun",
    component: Temp,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  }

];

export default dashboardRoutes;
