import { PiCertificateBold, PiMonitorPlayThin, PiClock } from "react-icons/Pi";
import { AiOutlineCar } from "react-icons/ai";
import { FaUserCheck, FaGraduationCap } from "react-icons/fa";
import { GiDirectionSigns } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/Lu";
import { HiUserGroup } from "react-icons/Hi"

export const NavLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "features",
    },
    {
        id: "gallery",
        title: "Gallery",
    },
    {
        id: "instructors",
        title: "Instructors",
    },
    {
        id: "pricing",
        title: "Pricing",
    },
    {
        id: "Contact",
        title: "Contact",
    },
];

export const FeaturesCard = [
    {
        Icon: PiCertificateBold,
        title: "Quick License",
        text: "lorem ipsum dolor sit amet to be consectetur adipiscing elit,"
    },
    {
        Icon: AiOutlineCar,
        title: "Unlimited Car Support",
        text: "lorem ipsum dolor sit amet to be consectetur adipiscing elit,"
    },
    {
        Icon: PiMonitorPlayThin,
        title: "Video Classes",
        text: "lorem ipsum dolor sit amet to be consectetur adipiscing elit,"
    },
    {
        Icon: FaUserCheck,
        title: "Experience Instructors",
        text: "lorem ipsum dolor sit amet to be consectetur adipiscing elit,"
    },
    {
        Icon: PiClock,
        title: "Any Time Any Place",
        text: "lorem ipsum dolor sit amet to be consectetur adipiscing elit,"
    },
    {
        Icon: GiDirectionSigns,
        title: "Learning Roads",
        text: "lorem ipsum dolor sit amet to be consectetur adipiscing elit,"
    },
];

export const stats = [
    {
        id: "stats-1",
        Icon: FaGraduationCap,
        title: "Dipplomé",
        value: "1500",
    },
    {
        id: "stats-2",
        Icon: LuCalendarClock,
        title: "Années D'experience",
        value: "5",
    },
    {
        id: "stats-3",
        Icon: HiUserGroup,
        title: "Eleves actuel",
        value: "300"
    }
]