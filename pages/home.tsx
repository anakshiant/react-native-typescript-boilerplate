import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ImageGrid from "../components/Home/ImageGrid";
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  AsyncStorage,
} from "react-native";
import { useDispatch, useSelector, State } from "../store/types";
import { searchPhotos } from "../store/actions/photos";
import NetInfo from "@react-native-community/netinfo";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { currentSearch, photos } = useSelector(
    (state: State) => state.photo.data
  );
  const isCloseToBottom = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    return (
      event.nativeEvent.layoutMeasurement.height +
        event.nativeEvent.contentOffset.y >=
      event.nativeEvent.contentSize.height - 50
    );
  };

  const onScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isCloseToBottom(event) && photos.page < photos.pages) {
      dispatch(searchPhotos(currentSearch, photos.pages + 1));
    }
  };

  async function loadCachedImages() {
    AsyncStorage.getItem("imagesUri", (err, res) => {
      if (err) {
        return;
      }
      const photoUri = res?.split(",") || [];
      console.log(photoUri);
      dispatch({
        type: "GET_PREVIOUS_SEARCH_ITEM_SUCCESS",
        payload: photoUri.map((input: string) => ({
          url: input,
          id: "",
          owner: "",
          secret: "",
          server: "",
          farm: 0,
          title: "",
        })),
      });
    });
  }

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      !state.isConnected && loadCachedImages();
    });
  });

  return (
    <ScrollView onScroll={onScrollHandler}>
      <ImageGrid />
    </ScrollView>
  );
};

export default Home;
