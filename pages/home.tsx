import React, { useEffect, useRef } from "react";
import { SectionList } from "react-native";
import styled from "styled-components/native";
import {
  useDispatch,
  useSelector,
  State,
  Dish,
  categories,
  Category,
} from "../store/types";
import { getDishes } from "../store/actions/dishes";
import SectionHeader from "../components/Home/SectionHeader";
import DishRow from "../components/DishRow";
import { COLOR } from "../utils/constants";
import ActionSheet from "react-native-actionsheet";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

const ContainerRoot = styled.View`
  display: flex;
  justify-content: center;
`;

type Section = {
  title: string;
  data: Dish[];
};

const FloatingMenuButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLOR.PRIMARY};
  height: 28px;
  width: 20%;
  border-radius: 10px;
  margin-top: 20px;
`;

const FloatingButtonContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0px;
  align-self: center;
  width: 100%;
  height: 100px;
`;

const SectionContainer = styled.View`
  height: 100%;
  padding: 10px;
`;

const CartButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLOR.PRIMARY};
  height: 42px;
  width: 100%;
  border-radius: 2px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: ${COLOR.WHITE};
`;

type CategoryCount = {
  category: Category;
  count: number;
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const actionSheetRef = useRef<ActionSheet>(null);
  const sectionRef = useRef<SectionList<Dish>>(null);
  const dishes = useSelector((state: State) => state.dishes);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    dispatch(getDishes());
  }, []);

  const handleMenuClick = () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.show();
    }
  };

  const handleCategorySelection = (index: number): void => {
    if (sectionRef.current) {
      sectionRef.current.scrollToLocation({
        animated: true,
        sectionIndex: index,
        itemIndex: 0,
      });
    }
  };

  const sections: Section[] = Object.values(dishes).reduce(
    (accumlator: Section[], current: Dish) => {
      const section: Section | undefined = accumlator.find(
        (item) => item.title === current.category
      );
      if (section) {
        section.data = [...section.data, current];
      } else {
        accumlator = [
          ...accumlator,
          { title: current.category, data: [current] },
        ];
      }
      return accumlator;
    },
    []
  );

  const categoryCountArray: CategoryCount[] = Object.values(dishes).reduce(
    (accumlator: CategoryCount[], dish: Dish) => {
      const categoryCount: CategoryCount | undefined = accumlator.find(
        (item) => item.category === dish.category
      );
      if (categoryCount) {
        categoryCount.count = categoryCount.count + 1;
      } else {
        accumlator = [...accumlator, { category: dish.category, count: 1 }];
      }
      return accumlator;
    },
    []
  );

  return (
    <ContainerRoot>
      <SectionContainer>
        <SectionList
          ref={sectionRef}
          sections={sections}
          renderItem={({ item }) => <DishRow dish={item} />}
          renderSectionHeader={({ section }) => (
            <SectionHeader title={section.title} />
          )}
        />
      </SectionContainer>
      <FloatingButtonContainer>
        <FloatingMenuButton onPress={handleMenuClick}>
          <ButtonText>Menu</ButtonText>
        </FloatingMenuButton>
        <CartButton onPress={() => navigation.navigate("Cart")}>
          <ButtonText>VIEW CART</ButtonText>
        </CartButton>
      </FloatingButtonContainer>
      <ActionSheet
        ref={actionSheetRef}
        title="Categories"
        options={[
          ...categoryCountArray.map(
            (categoryCount: CategoryCount) =>
              `${categoryCount.category} (${categoryCount.count})`
          ),
        ]}
        onPress={handleCategorySelection}
      />
    </ContainerRoot>
  );
};

export default Home;
