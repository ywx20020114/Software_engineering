import VueRouter from "vue-router";
import behav_bainian   from "@/views/behav_bainian";
import behavior from "@/views/behavior";
import behav_hongbao from "@/views/behav_hongbao";
import behav_chunlian from "@/views/behav_chunlian";
import behav_huadeng from "@/views/behav_huadeng";
import behav_wushi from "@/views/behav_wushi";

import clothes from "@/views/clothes"
import clothes_word_intro from "@/views/clothes_word_intro";
import clothes_img_show from "@/views/clothes_img_show";
import clothes_video_intro from "@/views/clothes_video_intro";
import clothes_recommend from "@/views/clothes_recommend";

import eat from '@/views/eat'
import eat_video1 from "@/views/eat_video1";
import eat_video2 from "@/views/eat_video2";
import eat_video3 from "@/views/eat_video3";
import eat_video4 from "@/views/eat_video4";
import eat_video5 from "@/views/eat_video5";
import eat_video6 from "@/views/eat_video6";
import eat_video7 from "@/views/eat_video7";
import eat_video8 from "@/views/eat_video8";

import main from '@/views/main'

import temp from "@/views/temp";
const router = new VueRouter({
    routes:
        [
            {
                path: '/',
                component: main

            },
            {
                path: '/behavior',
                component: behavior,

            },
            {
                path:'/behavior/bainian',
                component:behav_bainian,
            },
            {
                path:'/behavior/hongbao',
                component:behav_hongbao,
            },
            {
                path:'/behavior/chunlian',
                component:behav_chunlian,
            },
            {
                path:'/behavior/huadeng',
                component:behav_huadeng,
            },
            {
                path:'/behavior/wushi',
                component:behav_wushi,
            }
            ,
            {
                path: '/clothes',
                component: clothes
            }
            ,
            {
                path: '/clothes_word_intro',
                component: clothes_word_intro
            }
            ,
            {
                path: '/clothes_video_intro',
                component: clothes_video_intro
            }
            ,
            {
                path: '/clothes_img_show',
                component: clothes_img_show
            }
            ,
            {
                path: '/clothes_recommend',
                component: clothes_recommend
            },
            {
                path: '/eat',
                component: eat
            },
            {
                path: '/eat_video1',
                component: eat_video1
            },
            {
                path: '/eat_video2',
                component: eat_video2
            },
            {
                path: '/eat_video3',
                component: eat_video3
            },
            {
                path: '/eat_video4',
                component: eat_video4
            },
            {
                path: '/eat_video5',
                component: eat_video5
            },
            {
                path: '/eat_video6',
                component: eat_video6
            },
            {
                path: '/eat_video7',
                component: eat_video7
            },
            {
                path: '/eat_video8',
                component: eat_video8
            },
            {
                path:'/temp',
                component:temp
            }
        ]
})
export default router
