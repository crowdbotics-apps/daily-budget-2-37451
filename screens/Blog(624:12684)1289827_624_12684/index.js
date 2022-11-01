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
      <View style={styles.View_624_12685}>
        <View style={styles.View_624_12686}>
          <View style={styles.View_624_12687}>
            <View style={styles.View_624_12688}>
              <View style={styles.View_624_12689}>
                <View style={styles.View_624_12690} />
                <TouchableOpacity
                  style={styles.TouchableOpacity_624_12691}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("624_12322")
                    )
                  }
                >
                  <View style={styles.View_624_12692}>
                    <Text style={styles.Text_624_12692}>Profile</Text>
                  </View>
                  <View style={styles.View_624_12693}>
                    <View style={styles.View_I624_12693_19_14754}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/937bb995-8e3d-4dc0-b92f-5d5208a72dde"
                        }}
                        style={styles.ImageBackground_I624_12693_19_14755}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.View_624_12694}>
                  <View style={styles.View_624_12695}>
                    <Text style={styles.Text_624_12695}>Articles</Text>
                  </View>
                  <View style={styles.View_624_12696}>
                    <View style={styles.View_I624_12696_19_16252}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ab249aa-2a84-46f7-89e7-c9372f2cc2da"
                        }}
                        style={styles.ImageBackground_I624_12696_19_16253}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_624_12697}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("733_9124")
                    )
                  }
                >
                  <View style={styles.View_624_12698}>
                    <Text style={styles.Text_624_12698}>Home </Text>
                  </View>
                  <View style={styles.View_624_12699}>
                    <View style={styles.View_I624_12699_19_31105}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0fdfc64-0608-49f9-9487-406b521b340a"
                        }}
                        style={styles.ImageBackground_I624_12699_19_31106}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.TouchableOpacity_624_12700}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("624_12957")
                    )
                  }
                >
                  <View style={styles.View_624_12701}>
                    <Text style={styles.Text_624_12701}>Budget</Text>
                  </View>
                  <View style={styles.View_624_12702}>
                    <View style={styles.View_I624_12702_19_9727}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd22a8dc-bbb0-414e-9ef1-16c14ce38aab"
                        }}
                        style={styles.ImageBackground_I624_12702_19_9728}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.View_624_12703} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/190308a1-440d-42f1-a797-20511a938cde"
            }}
            style={styles.ImageBackground_624_12704}
          />
          <View style={styles.View_624_12705}>
            <View style={styles.View_624_12706}>
              <View style={styles.View_624_12707}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/094d7a8b-da4d-4913-a195-e9d891ebb8d7"
                  }}
                  style={styles.ImageBackground_624_12708}
                />
                <View style={styles.View_624_12709}>
                  <View style={styles.View_624_12710}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee0ba300-91a5-437e-925b-041c0abe3a6f"
                      }}
                      style={styles.ImageBackground_624_12711}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0751e835-c0a2-4f90-b291-e4ba0109ed02"
                      }}
                      style={styles.ImageBackground_624_12712}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/207214f1-379c-4cc5-adad-350f1178f10d"
                  }}
                  style={styles.ImageBackground_624_12713}
                />
                <View style={styles.View_624_12714}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a40f722e-8c20-4f10-98e1-749affa626a8"
                    }}
                    style={styles.ImageBackground_624_12715}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a63d98e-df7c-4bde-849d-82d42346dd2d"
                  }}
                  style={styles.ImageBackground_624_12716}
                />
                <View style={styles.View_624_12717}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/905dc474-db98-4ec5-b3fb-9e97c1b97e43"
                    }}
                    style={styles.ImageBackground_624_12718}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd648ff4-3bf2-4294-868a-c27c1a262b20"
                    }}
                    style={styles.ImageBackground_624_12719}
                  />
                </View>
                <View style={styles.View_624_12720}>
                  <View style={styles.View_624_12721}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a10b576-1366-4fe7-9088-5af744b231fd"
                      }}
                      style={styles.ImageBackground_624_12722}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b284912-0dfe-42f0-bfee-7d4a8d994e9d"
                      }}
                      style={styles.ImageBackground_624_12723}
                    />
                  </View>
                </View>
                <View style={styles.View_624_12724}>
                  <Text style={styles.Text_624_12724}>
                    Saving For the future Its never to late to start.  
                  </Text>
                </View>
                <View style={styles.View_624_12725}>
                  <Text style={styles.Text_624_12725}>Five Minute Read</Text>
                </View>
                <View style={styles.View_624_12726}>
                  <Text style={styles.Text_624_12726}>
                    Saving For the future Its never to late to start.  
                  </Text>
                </View>
                <View style={styles.View_624_12727}>
                  <Text style={styles.Text_624_12727}>Five Minute Read</Text>
                </View>
                <View style={styles.View_624_12728}>
                  <Text style={styles.Text_624_12728}>
                    Saving For the future Its never to late to start.  
                  </Text>
                </View>
                <View style={styles.View_624_12729}>
                  <Text style={styles.Text_624_12729}>Five Minute Read</Text>
                </View>
                <View style={styles.View_624_12730}>
                  <Text style={styles.Text_624_12730}>
                    Saving For the future Its never to late to start.  
                  </Text>
                </View>
                <View style={styles.View_624_12731}>
                  <Text style={styles.Text_624_12731}>Five Minute Read</Text>
                </View>
                <View style={styles.View_624_12732}>
                  <Text style={styles.Text_624_12732}>
                    Saving For the future Its never to late to start.  
                  </Text>
                </View>
                <View style={styles.View_624_12733}>
                  <Text style={styles.Text_624_12733}>Five Minute Read</Text>
                </View>
                <View style={styles.View_624_12734}>
                  <Text style={styles.Text_624_12734}>
                    Saving For the future Its never to late to start.  
                  </Text>
                </View>
                <View style={styles.View_624_12735}>
                  <Text style={styles.Text_624_12735}>Five Minute Read</Text>
                </View>
                <View style={styles.View_624_12736}>
                  <Text style={styles.Text_624_12736}>
                    Saving For the future Its never to late to start.  
                  </Text>
                </View>
                <View style={styles.View_624_12737}>
                  <Text style={styles.Text_624_12737}>Five Minute Read</Text>
                </View>
                <View style={styles.View_624_12738}>
                  <View style={styles.View_624_12739}>
                    <View style={styles.View_624_12740}>
                      <Text style={styles.Text_624_12740}>
                        Daily Budget Blog
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_624_12685: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_624_12686: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    overflow: "hidden"
  },
  View_624_12687: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%")
  },
  View_624_12688: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12689: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12690: {
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
  TouchableOpacity_624_12691: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%")
  },
  View_624_12692: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12692: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12693: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12693_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12693_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12694: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("2%")
  },
  View_624_12695: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12695: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12696: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12696_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12696_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12697: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_624_12698: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12698: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12699: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12699_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12699_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12700: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%")
  },
  View_624_12701: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12702: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12702_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12702_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12703: {
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
  ImageBackground_624_12704: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_624_12705: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_624_12706: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_624_12707: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("166%"),
    minHeight: hp("166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_624_12708: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  View_624_12709: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("29%")
  },
  View_624_12710: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12711: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12712: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_624_12713: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("49%"),
    resizeMode: "cover"
  },
  View_624_12714: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("69%")
  },
  ImageBackground_624_12715: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_624_12716: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("89%"),
    resizeMode: "cover"
  },
  View_624_12717: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("109%")
  },
  ImageBackground_624_12718: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12719: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_624_12720: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("129%")
  },
  View_624_12721: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12722: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12723: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_624_12724: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_624_12724: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12725: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_624_12725: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12726: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_624_12726: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12727: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("16%"),
    justifyContent: "center"
  },
  Text_624_12727: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12728: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_624_12728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12729: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("56%"),
    justifyContent: "center"
  },
  Text_624_12729: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12730: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_624_12730: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12731: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("77%"),
    justifyContent: "center"
  },
  Text_624_12731: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12732: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("89%"),
    justifyContent: "center"
  },
  Text_624_12732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12733: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("97%"),
    justifyContent: "center"
  },
  Text_624_12733: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12734: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("109%"),
    justifyContent: "center"
  },
  Text_624_12734: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12735: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("117%"),
    justifyContent: "center"
  },
  Text_624_12735: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12736: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("129%"),
    justifyContent: "center"
  },
  Text_624_12736: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12737: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("137%"),
    justifyContent: "center"
  },
  Text_624_12737: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12738: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%")
  },
  View_624_12739: {
    width: wp("46%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_624_12740: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_624_12740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
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
