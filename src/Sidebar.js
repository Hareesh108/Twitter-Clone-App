import React from "react";
import  "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';


function Sidebar() {
    return (
       <div className="sidebar">
           {/* Twitter Icons */}
           <TwitterIcon className="sidebar__tweetIcon" />
           
           {/* SiderbarOptions */}
           <SidebarOption active Icon={HomeIcon} text="Home" />
           <SidebarOption Icon={SearchIcon} text="Explore" />
           <SidebarOption Icon={NotificationsIcon} text="Notifications" />
           <SidebarOption Icon={EmailIcon} text="Massages" />
           <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
           <SidebarOption Icon={ListAltIcon} text="Lists" />
           <SidebarOption Icon={PermIdentityIcon} text="Profile" />
           <SidebarOption Icon={MoreHorizIcon} text="More" />


           {/* Button --> for Tweet */}

           <Button variant="outlined" className="sidebar--tweet" fullWidth>
               Tweet
            </Button>
            
       </div>
    );
}

export default Sidebar;
