import Bike from '../page/Bike';
import Taxi from '../page/Taxi';
import GoodsPickUp from '../page/GoodsPickUp';
import Coupon from '../page/Coupon';
import HitchRide from '../page/HitchRide';
import CarPool from '../page/CarPool';
import Bus from '../page/Bus';
import DesignatedDrive from '../page/DesignatedDrive';

export const pages = [
    {title: '青桔骑行', name: 'BikePage', page: Bike},
    {title: '打车', name: 'TaxiPage', page: Taxi},
    {title: '拉货搬家', name: 'GoodsPickUpPage', page: GoodsPickUp},
    {title: '特惠来了', name: 'CouponPage', page: Coupon},
    {title: '顺风车', name: 'HitchRidePage', page: HitchRide},
    {title: '青菜拼车', name: 'CarPoolPage', page: CarPool},
    {title: '公交', name: 'BusPage', page: Bus},
    {title: '代驾', name: 'DesignatedDrivenPage', page: DesignatedDrive},
];
