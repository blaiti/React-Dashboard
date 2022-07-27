import DashboardIcon from '../assets/icons/dashboard.svg';
import CashIcon from '../assets/icons/cash.svg';
import LocationIcon from '../assets/icons/location.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: CashIcon,
        path: '/payments',
        title: 'Payments',
    },
    {
        id: 3,
        icon: LocationIcon,
        path: '/locations',
        title: 'Locations',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/profile',
        title: 'My account',
    }
]

export default sidebar_menu;