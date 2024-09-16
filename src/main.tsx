import {RouterProvider} from "react-router-dom";
import router from '@/routes'
import { createRoot } from "react-dom/client";
import './index.css'









(function () {
    let temp=document as any;
    temp.requestFullscreen = temp.requestFullscreen || temp.mozRequestFullScreen || temp.webkitRequestFullScreen || temp.msRequestFullscreen;
    temp.exitFullscreen=temp.exitFullscreen||temp.mozCancelFullScreen||temp.webkitExitFullscreen||temp.msExitFullscreen;
})()








createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);