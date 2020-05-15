import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, AsyncStorage } from "react-native";
import {
  downloadAsync,
  cacheDirectory,
  makeDirectoryAsync,
  getInfoAsync,
} from "expo-file-system";
type Props = {
  url: string;
  title: string;
};

const folder = `${cacheDirectory}/photos`;

const createIfNotExist = async () => {
  const info = await getInfoAsync(folder);
  !info.exists && makeDirectoryAsync(folder);
};

const Photo: React.FC<Props> = ({ url, title }: Props) => {
  const [processing, setProcessing] = useState<boolean>(false);

  useEffect(() => {
    createIfNotExist().then(() => {
      downloadAsync(url, `${folder}/${title}.jpg`);
      AsyncStorage.getItem("imagesUri", (_err, result = "") => {
        AsyncStorage.setItem("imagesUri", `${result},${folder}/${title}`);
      });
    });
  });

  return (
    <View style={style.root}>
      {processing && <Text>processing</Text>}
      <Image
        style={style.image}
        source={{ uri: url }}
        onLoadStart={() => setProcessing(true)}
        onLoadEnd={() => setProcessing(false)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Photo;
