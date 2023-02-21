import { useState, useEffect } from "react";
const useUnsavedChangesWarning = (message = "Are you sure want to discard changes?") => {
    const [isDirty, setDirty] = useState(false);

    useEffect(() => {
        //Detecting browser closing
        window.onbeforeunload = isDirty && (() => message);

        return () => {
            window.onbeforeunload = null;
        };
    }, [isDirty,message]);

   const routerPrompt=()=>{
    if(isDirty){
        window.confirm(message)
    }
   }

    return [routerPrompt, () => setDirty(true),() => setDirty(false)];
};

export default useUnsavedChangesWarning;
