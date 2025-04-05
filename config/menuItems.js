import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import EmailIcon from "@mui/icons-material/Email";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const menuItems = [
  { label: "About", href: `${base}/static/under-construction`, icon: <PersonIcon /> },
  { label: "Project", href: `${base}/static/under-construction`, icon: <BuildIcon /> },
  { label: "Contact", href: `${base}/static/under-construction`, icon: <EmailIcon /> },
];

export default menuItems;