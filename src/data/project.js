import ims from "@/assets/ims.png";
import anime from "@/assets/anime.png";
import sdn from "@/assets/sdn.png";

export const projects = [
     {
          name:"Incident Management System",
          description:"An Incident Management System (IMS) is a tool that helps organizations efficiently track, manage, and resolve incidents or issues. It ensures quick response, minimizes downtime, improves communication, and maintains a record of incidents for analysis and prevention of future occurrences.",
          image:ims,
          stack:['Vue.js','Tailwind CSS','Laravel','Docker','DDEV'],
          features:[
               'Real-time dashboards and wallboard',
               'Quick incident creation (manual,API,mobile app)',
               'Database encryption',
               'Incident status tracking',
               'Activity and access logs',
               'Mobile app intergration',
               'Responder App Tracker',
               'User Management',
               'Dropdown Management',
               'Api key configration (mapbox,weather api)',
          ],
     },
     {
          name:"Province Health Office (Surigao Del Norte)",
          description:"The Provincial Health Office of Surigao del Norte is committed to protecting and promoting the health and well-being of communities across the province. Through efficient public health programs, disease prevention initiatives, health education, and accessible medical services, the office works closely with local government units, health facilities, and partner organizations to deliver quality healthcare for all Surigaonons.",
          image:sdn,
          stack:['Vue.js','Express.js','Tailwind CSS','Laravel','Clickhouse','Grafana','Puppeteer'],
          features:[
               'Intergration of grafana dashboard to portal',
               'Generate Report to Embedded Dashboard using headless browser',
               'Database encryption',
               'Sanities excel file and import',
               'Grafana api intergration (create dashboard,update title)',
               'User Management',
               'Activity Log & Login History',
               'Reset Password via Email'
          ],
     },
     {
          name:"Otakuhub Stream",
          description:"An anime streaming platform is a service that allows users to watch anime online, offering a wide range of series and movies on-demand. It provides features like subtitles, dubbed versions, and personalized recommendations for anime fans.",
          image:anime,
          stack:['Vue.js','Tailwind CSS','Express.js'],
          features:[
               'Updated anime and episode',
               'Search Anime',
               'Video Streaming',
               'Api Based'
          ],
     },
];