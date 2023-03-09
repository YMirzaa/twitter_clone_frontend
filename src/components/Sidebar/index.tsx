import React from "react";

import { SidebarOption } from "../../components";

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import {Button } from '@mui/material';

import './styles.css';

export default function Sidebar() {
  return <div className="sidebar">
    {/* twitter icon */}
    <TwitterIcon className="sidebar__twitter-icon" />

  {/* {sidebar options} */}
    <SidebarOption active Icon={HomeIcon} text="Home" />
    <SidebarOption Icon={TagIcon} text="Explore" />
    <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
    <SidebarOption Icon={EmailOutlinedIcon} text="Messages" />
    <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
    <SidebarOption Icon={ListAltIcon} text="Lists" />
    <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
    <SidebarOption Icon={MoreHorizIcon} text="More" />
    
    {/* button -> tweet */}
    <Button variant="outlined" className="sidebar__tweet-button" fullWidth>Tweet</Button>
  </div>;
}