import {useLocation} from "react-router-dom";

type LocationType<State> = ReturnType<typeof useLocation> & { state: State }

const useAppLocation = <State>(): LocationType<State> => useLocation() as any;

export {
    useAppLocation
}