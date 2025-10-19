import { Routes, Route } from "react-router-dom";
import {
  Home,
  UseStatePag,
  UseEffectPag,
  UseCallbackPag,
  UseMemoPag,
  UseContextPag,
  UseRefPag,
  UseReducerPag,
  UseTransitionPag,
  UseImperativeHandlePag,
  UseLayoutEffectPag,
  UseInsertionEffectPag,
  UseDeferredValuePag,
  UseSyncExternalStorePag,
  UseIdPag,
  UseDebugValuePag,
} from "../pages";

/**
 * 📍 AppRoutes
 * Contiene todas las rutas principales del proyecto.
 */
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/usestate" element={<UseStatePag />} />
    <Route path="/useeffect" element={<UseEffectPag />} />
    <Route path="/usecallback" element={<UseCallbackPag />} />
    <Route path="/usememo" element={<UseMemoPag />} />
    <Route path="/usecontext" element={<UseContextPag />} />
    <Route path="/useref" element={<UseRefPag />} />
    <Route path="/usereducer" element={<UseReducerPag />} />
    <Route path="/usetransition" element={<UseTransitionPag />} />
    <Route path="/useimperativehandle" element={<UseImperativeHandlePag />} />
    <Route path="/uselayouteffect" element={<UseLayoutEffectPag />} />
    <Route path="/useinsertioneffect" element={<UseInsertionEffectPag />} />
    <Route path="/usedeferredvalue" element={<UseDeferredValuePag />} />
    <Route path="/usesyncexternalstore" element={<UseSyncExternalStorePag />} />
    <Route path="/useid" element={<UseIdPag />} />
    <Route path="/usedebugvalue" element={<UseDebugValuePag />} />
  </Routes>
);
