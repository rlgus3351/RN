import { AdMobRewarded } from "expo-ads-admob";
import { useEffect } from "react";
import { Platform } from "react-native";




const UNIT_ID = Platform.select({
    // ios:__DEV__? "ca-app-pub-3940256099942544/1712485313" : "ca-app-pub-3992652244356839/4977407542",
    ios:"ca-app-pub-3940256099942544/1712485313",
    // android:"ca-app-pub-3992652244356839/5580042770"
    
    // android:__DEV__?"ca-app-pub-3940256099942544/5224354917":"ca-app-pub-3992652244356839/5580042770"
    android:"ca-app-pub-3940256099942544/5224354917"
})

export const useRewardAd = () =>{

    const [isLoaded , setIsLoaded] = useState(false); // 광고가 로딩이 됐는지
    const [isRewarded , setIsRewarded] = useState(false); // 보상을 받을 수 있는 상태까지 광고를 봤는지
    const [isClosed , setIsClosed] = useState(false); // 광고가 닫혔는지


    const loadRewardAd = async () =>{
        await AdMobRewarded.setAdUnitID(UNIT_ID);
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
    }

    const resetAdValue = () =>{
        setIsLoaded(false);
        setIsRewarded(false);
        setIsClosed(false);
    }

    useEffect(()=>{
        
        AdMobRewarded.addEventListener("rewardedVideoDidLoad", ()=>{
            console.log("rewardedVideoDidLoad");
            setIsLoaded(true);
        });
        
        AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", ()=>{
            console.log("rewardedVideoUserDidEarnReward");
            setIsRewarded(true);
        });
        AdMobRewarded.addEventListener("rewardedVideoDidDismiss", ()=>{
            console.log("rewardedVideoDidDismiss");
            setIsClosed(true);
        });

        return ()=>{
            AdMobRewarded.removeAllListeners();
        };
    },[]);




    return{
        loadRewardAd,
        isLoaded,
        isClosed,
        isRewarded,
        resetAdValue,
    };
};