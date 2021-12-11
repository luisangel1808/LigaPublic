import { auth } from '../firebase';

export function watchUserChanges(callback){
    const unsub = auth.onAuthStateChanged((user)=>{
        if(user && !user.isAnonymous){
            console.log('logged');
            callback({
                id: user.uid,
                email: user.email,
                displayName:user.displayName,
            });
        }
        else{
            console.log('Not logged');
            callback(null);
        }
    });

    return unsub;
}

