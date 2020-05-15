import React, { useState } from "react";
import Photo from "../../components/shared/Photo";
import { Card } from "native-base";
import { Col, Grid, Row } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, State } from "../../store/types";
import { Photo as PhotoType } from "../../services/flickr/dto";
import { PhotoGrid, GridType } from "../../store/types";
import { processPhotoGrid } from "../../utils";

const ImageGrid: React.FC = () => {
  const photos = useSelector((state: State) => state.photo.data.photos.photo);
  const gridType: GridType = useSelector(
    (state: State) => state.photo.data.gridType
  );

  const photoGrid: PhotoGrid = processPhotoGrid(photos, gridType);

  return (
    <ScrollView>
      <Grid>
        {photoGrid.map((photos: PhotoType[], index: number) => (
          <Row key={index}>
            {photos.map((photo: PhotoType) => (
              <Col style={{ height: 200 }}>
                <Card key={photo.id}>
                  <Photo url={photo.url!} title={photo.title} />
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Grid>
    </ScrollView>
  );
};

export default ImageGrid;
