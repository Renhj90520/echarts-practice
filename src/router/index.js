import Vue from 'vue';
import Router from 'vue-router';
import ColorPie from '@/components/ColorfulPie';
import PieInfoGraphic from '@/components/PieInfoGraphic';
import Markline from '@/components/Markline';
import LineArea from '@/components/LineArea';
import GradientBar from '@/components/GradientBar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: ColorPie
    },
    {
      path: '/pieinfographic',
      component: PieInfoGraphic
    },
    {
      path: '/markline',
      component: Markline
    },
    {
      path: '/linearea',
      component: LineArea
    },
    {
      path: '/gradientbar',
      component: GradientBar
    }
  ]
});
