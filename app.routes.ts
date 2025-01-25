import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { Hero1Component } from './hero1/hero1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { PrsComponent } from './projects/prs/prs.component';
import { ActivityComponent } from './activity/activity.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DivisionMeetingMenuComponent } from './division-meeting-menu/division-meeting-menu.component';
import { MdmsMenuComponent } from './mdms-menu/mdms-menu.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { NetworkMenuComponent } from './network-menu/network-menu.component';
import { SecurityMenuComponent } from './security-menu/security-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DomainsComponent } from './domains/domains.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ICTHtmlComponent } from './icthtml/icthtml.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'htmlpage', component: ICTHtmlComponent },
  { path: 'downloads', component: DownloadsComponent },
  {path: "details/:id", component: DomainsComponent},
  { path: 'home', component: Hero1Component }, 
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent }, 
  { path: 'projects', component: ProjectsComponent }, 
  { path: 'case-studies', component: CaseStudiesComponent }, 
  { path: 'projects/prs', component: PrsComponent }, 
  { path: 'activity', component: ActivityComponent },
  { path: 'Meetings', component: MeetingsComponent },
  { path: 'Divisions', component: DivisionMeetingMenuComponent }, 
  { path: 'Mdms', component: MdmsMenuComponent }, 
  { path: 'System', component: SystemMenuComponent }, 
  { path: 'Network', component: NetworkMenuComponent }, 
  { path: 'Security', component: SecurityMenuComponent }, 
];
