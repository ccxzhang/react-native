import { FlatList, View, StyleSheet, Text, Image } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    fontsize: theme.fontSizes.body,
    backgroundColor: "white",
    width: "100r%"
  },
  heading: {
    fontWeight: theme.fontWeights.bold,
    marginVertical: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  descriptionContainer: {
    flexDirection: "row",
  },
  descriptionText: {
    color: "gray",
    marginVertical: 5,
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
    alignSelf: "flex-start",
  },
  languageText: {
    color: "#FFF",
    fontWeight: theme.fontWeights.normal,
  },
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    marginHorizontal: 12,
  },
  cardRowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const thousandConvertor = (num, decimalPlaces = 1) => {
  num = Math.round(num / 1000 + "e" + decimalPlaces);
  return `${Number(num + "e" + -decimalPlaces)}k`;
};

const StatsCard = ({ stats, unit }) => (
  <View style={styles.statsContainer}>
    <View style={theme.flexColumnContainer}>
      <Text style={styles.heading}>
        {stats >= 1000 ? thousandConvertor(stats) : stats}
      </Text>
      <Text style={styles.descriptionText}>{unit}</Text>
    </View>
  </View>
);

const Item = ({ repo }) => (
  <View style={styles.item}>
    <View style={theme.flexRowContainer}>
      <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
      <View>
        <Text style={styles.heading}>{repo.fullName}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText} numberOfLines={2}>{repo.description}</Text>
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>{repo.language}</Text>
        </View>
      </View>
    </View>
    <View style={styles.cardRowContainer}>
      <StatsCard stats={repo.stargazersCount} unit={"Stars"} />
      <StatsCard stats={repo.forksCount} unit={"Forks"} />
      <StatsCard stats={repo.reviewCount} unit={"Reviews"} />
      <StatsCard stats={repo.ratingAverage} unit={"Rating"} />
    </View>
  </View>
);

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Item repo={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
