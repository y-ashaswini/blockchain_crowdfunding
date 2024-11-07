import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
    alt: 'Home',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
    alt: 'Create a New Campaign'
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
    alt: 'Payment'
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
    alt: 'Withdraw'
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
    alt: 'Profile'
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
    alt: 'Log out'
  },
];