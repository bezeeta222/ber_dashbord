// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconLayoutGrid, IconUser,IconTicket } from '@tabler/icons';
import { OverrideIcon } from 'types';

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics,
  IconLayoutGrid,
  IconUser,
  IconTicket

};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

interface DashboardMenuProps {
  id: string;
  title: React.ReactNode | string;
  type: string;
  children: {
    id: string;
    title: React.ReactNode | string;
    type: string;
    url: string;
    icon: OverrideIcon;
    breadcrumbs: boolean;
  }[];
}

const dashboard: DashboardMenuProps = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  children: [
    {
      id: 'default',
      title: <FormattedMessage id="Dashboard" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconLayoutGrid,
      breadcrumbs: false
    },
    {
      id: 'analytics',
      title: <FormattedMessage id="Customer" />,
      type: 'item',
      url: '/user',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'analytics',
      title: <FormattedMessage id="Events" />,
      type: 'item',
      url: '/events',
      icon: icons.IconTicket,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
