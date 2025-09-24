import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Skill } from './skill/skill';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';


export const routes: Routes = [
     {path:'home',component:Home},
    {path:'about',component:About},
    {path:'skills',component:Skill},
    {path:'projects',component:Projects},
    {path:'contact',component:Contact},
    {path:'',component:Home},
    {path:'**',component:NotFound}
];
