import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_624_12230} />
      <View style={styles.View_624_12231}>
        <View style={styles.View_I624_12231_119_97}>
          <Text style={styles.Text_I624_12231_119_97}>4:00</Text>
        </View>
        <View style={styles.View_I624_12231_119_98}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c02d7029-09aa-43cc-88e9-7e63bad65e89"
            }}
            style={styles.ImageBackground_I624_12231_119_99}
          />
        </View>
        <View style={styles.View_I624_12231_119_104}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08e0fe78-d178-41a1-b845-3a4cef1223cd"
            }}
            style={styles.ImageBackground_I624_12231_119_105}
          />
        </View>
        <View style={styles.View_I624_12231_119_109}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee488c2d-2b33-4fb5-9c19-68becd0bc5f1"
            }}
            style={styles.ImageBackground_I624_12231_119_110}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d02fc1b-7bf0-4148-ab7d-d01db8111b7e"
        }}
        style={styles.ImageBackground_624_12232}
      />
      <View style={styles.View_624_12233}>
        <Text style={styles.Text_624_12233}>
          Take control of your life by taking control of your finances
        </Text>
      </View>
      <View style={styles.View_624_12234}>
        <View style={styles.View_I624_12234_235_1910}>
          <View style={styles.View_I624_12234_235_1911} />
          <View style={styles.View_I624_12234_235_1912}>
            <View style={styles.View_I624_12234_235_1914}>
              <Text style={styles.Text_I624_12234_235_1914}>0</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1915}>
            <View style={styles.View_I624_12234_235_1916} />
            <View style={styles.View_I624_12234_235_1918}>
              <Text style={styles.Text_I624_12234_235_1918}>1</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1919}>
            <View style={styles.View_I624_12234_235_1920} />
            <View style={styles.View_I624_12234_235_1921}>
              <Text style={styles.Text_I624_12234_235_1921}>ABC</Text>
            </View>
            <View style={styles.View_I624_12234_235_1922}>
              <Text style={styles.Text_I624_12234_235_1922}>2</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1923}>
            <View style={styles.View_I624_12234_235_1924} />
            <View style={styles.View_I624_12234_235_1925}>
              <Text style={styles.Text_I624_12234_235_1925}>DEF</Text>
            </View>
            <View style={styles.View_I624_12234_235_1926}>
              <Text style={styles.Text_I624_12234_235_1926}>3</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1927}>
            <View style={styles.View_I624_12234_235_1928} />
            <View style={styles.View_I624_12234_235_1929}>
              <Text style={styles.Text_I624_12234_235_1929}>GHI</Text>
            </View>
            <View style={styles.View_I624_12234_235_1930}>
              <Text style={styles.Text_I624_12234_235_1930}>4</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1931}>
            <View style={styles.View_I624_12234_235_1932} />
            <View style={styles.View_I624_12234_235_1933}>
              <Text style={styles.Text_I624_12234_235_1933}>JKL</Text>
            </View>
            <View style={styles.View_I624_12234_235_1934}>
              <Text style={styles.Text_I624_12234_235_1934}>5</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1935}>
            <View style={styles.View_I624_12234_235_1936} />
            <View style={styles.View_I624_12234_235_1937}>
              <Text style={styles.Text_I624_12234_235_1937}>MNO</Text>
            </View>
            <View style={styles.View_I624_12234_235_1938}>
              <Text style={styles.Text_I624_12234_235_1938}>6</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1939}>
            <View style={styles.View_I624_12234_235_1940} />
            <View style={styles.View_I624_12234_235_1941}>
              <Text style={styles.Text_I624_12234_235_1941}>PQRS</Text>
            </View>
            <View style={styles.View_I624_12234_235_1942}>
              <Text style={styles.Text_I624_12234_235_1942}>7</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1943}>
            <View style={styles.View_I624_12234_235_1944} />
            <View style={styles.View_I624_12234_235_1945}>
              <Text style={styles.Text_I624_12234_235_1945}>TUV</Text>
            </View>
            <View style={styles.View_I624_12234_235_1946}>
              <Text style={styles.Text_I624_12234_235_1946}>8</Text>
            </View>
          </View>
          <View style={styles.View_I624_12234_235_1947}>
            <View style={styles.View_I624_12234_235_1948} />
            <View style={styles.View_I624_12234_235_1949}>
              <Text style={styles.Text_I624_12234_235_1949}>WXYZ</Text>
            </View>
            <View style={styles.View_I624_12234_235_1950}>
              <Text style={styles.Text_I624_12234_235_1950}>9</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d52edff-6716-4aff-aa34-ad7b7c140a04"
            }}
            style={styles.ImageBackground_I624_12234_235_1951}
          />
          <View style={styles.View_I624_12234_235_1953} />
          <View style={styles.View_I624_12234_235_1957} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dabc62c-968f-4092-94fe-7fe9de45d38a"
        }}
        style={styles.ImageBackground_624_12235}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2a848f3-0c15-4a62-9e97-f1d7e9c3dff9"
        }}
        style={styles.ImageBackground_624_12236}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3a4b814-8d54-40c6-83a5-a6367d304739"
        }}
        style={styles.ImageBackground_624_12237}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1b4128f-c834-4318-b3f7-834a7490a3a3"
        }}
        style={styles.ImageBackground_624_12238}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ae7c6f2-6694-4188-be36-789ed278f3c5"
        }}
        style={styles.ImageBackground_624_12239}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4c0f97c-4bc2-44cb-9d03-b29a2ba04ea2"
        }}
        style={styles.ImageBackground_624_12240}
      />
      <View style={styles.View_624_12241}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88ca2763-799a-4d59-9a4a-1d4bdd3b1588"
          }}
          style={styles.ImageBackground_624_12242}
        />
        <View style={styles.View_624_12243}>
          <Text style={styles.Text_624_12243}>Enter Code</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(240, 244, 250, 1)" },
  View_2: { height: hp("115%") },
  View_624_12230: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)"
  },
  View_624_12231: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12231_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12231_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I624_12231_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I624_12231_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12231_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I624_12231_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12231_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  ImageBackground_I624_12231_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12232: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("37%")
  },
  View_624_12233: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_624_12233: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12234: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I624_12234_235_1910: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I624_12234_235_1911: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 46, 46, 1)"
  },
  View_I624_12234_235_1912: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("23%"),
    backgroundColor: "rgba(100, 100, 100, 1)"
  },
  View_I624_12234_235_1914: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1914: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1915: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1916: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1918: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1918: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1919: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1920: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1921: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1922: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1922: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1923: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1924: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1925: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1925: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1926: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1926: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1927: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1928: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1929: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1929: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1930: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1930: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1931: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1932: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1933: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1933: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1934: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1935: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1936: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1937: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1937: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1938: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1938: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1939: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1940: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1941: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1941: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1942: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1942: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1943: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1944: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1945: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1945: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1946: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1946: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I624_12234_235_1947: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12234_235_1948: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_I624_12234_235_1949: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1949: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7000000000000002,
    textTransform: "none"
  },
  View_I624_12234_235_1950: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I624_12234_235_1950: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_I624_12234_235_1951: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_I624_12234_235_1953: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("25%")
  },
  View_I624_12234_235_1957: {
    width: wp("35%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("38%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_624_12235: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("40%")
  },
  ImageBackground_624_12236: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("40%")
  },
  ImageBackground_624_12237: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("40%")
  },
  ImageBackground_624_12238: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("40%")
  },
  ImageBackground_624_12239: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("40%")
  },
  ImageBackground_624_12240: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("40%")
  },
  View_624_12241: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("58%")
  },
  ImageBackground_624_12242: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12243: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_624_12243: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
