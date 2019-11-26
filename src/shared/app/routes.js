import loadable from 'loadable-components';

export const MenuDisplay= loadable( () => import('../menu-display/MenuDisplay') );
export const Home = loadable( () => import('../home/Home') );
export const Broadheads = loadable( () => import('../broadheads/Broadheads') );
export const Broadhead = loadable( () => import('../broadheads/Broadhead') );
export const Accessories = loadable( () => import('../accessories/Accessories') );
export const Accessory = loadable( () => import('../accessories/Accessory') );
export const Apparel = loadable( () => import('../apparel/Apparel') );
export const ApparelItem = loadable( () => import('../apparel/ApparelItem') );
export const GuidingPrinciples = loadable( () => import('../guiding-principles/GuidingPrinciples') );
export const Videos = loadable( () => import('../videos/Videos') );
export const Support = loadable( () => import('../support/Support') );
export const Promos = loadable( () => import('../promos/Promos') );

export const Cart = loadable( () => import('../cart/Cart') );

export const BlackFridayDeals = loadable( () => import('../black-friday-deals/BlackFridayDeals') );

export const Error404 = loadable( () => import('./../error-404/Error404') );
