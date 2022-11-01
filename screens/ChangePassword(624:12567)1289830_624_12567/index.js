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
      <View style={styles.View_624_12568}>
        <View style={styles.View_624_12569}>
          <View style={styles.View_624_12570} />
          <View style={styles.View_624_12571}>
            <View style={styles.View_I624_12571_119_97}>
              <Text style={styles.Text_I624_12571_119_97}>4:00</Text>
            </View>
            <View style={styles.View_I624_12571_119_98}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b489d15b-6ffd-41ee-b1c0-1099a8d859ce"
                }}
                style={styles.ImageBackground_I624_12571_119_99}
              />
            </View>
            <View style={styles.View_I624_12571_119_104}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e12d11eb-a41d-48f4-a1ef-0a1c4a4ea436"
                }}
                style={styles.ImageBackground_I624_12571_119_105}
              />
            </View>
            <View style={styles.View_I624_12571_119_109}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b62eec45-8e6b-4cd4-9cf4-c5861f34cb02"
                }}
                style={styles.ImageBackground_I624_12571_119_110}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12572}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12322"))
            }
          >
            <View style={styles.View_I624_12572_19_13484}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bbf1472-d43d-48af-b2b8-7a980b96fbcf"
                }}
                style={styles.ImageBackground_I624_12572_19_13485}
              />
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b22f7e67-7a47-4a0f-971e-7dca99f326d6"
            }}
            style={styles.ImageBackground_624_12573}
          />
        </View>
        <View style={styles.View_624_12574}>
          <View style={styles.View_624_12575} />
          <View style={styles.View_624_12576}>
            <View style={styles.View_I624_12576_19_9727} />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12577}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12957"))
            }
          >
            <View style={styles.View_624_12578}>
              <Text style={styles.Text_624_12578}>Budget</Text>
            </View>
            <View style={styles.View_624_12579}>
              <View style={styles.View_I624_12579_19_9727}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72e2b449-f953-47ef-b1fb-a560565eed82"
                  }}
                  style={styles.ImageBackground_I624_12579_19_9728}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12580}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12322"))
            }
          >
            <View style={styles.View_624_12581}>
              <Text style={styles.Text_624_12581}>Profile</Text>
            </View>
            <View style={styles.View_624_12582}>
              <View style={styles.View_I624_12582_19_14754}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7018754-2f91-42d7-bfd8-fd5330185e60"
                  }}
                  style={styles.ImageBackground_I624_12582_19_14755}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12583}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("733_9124"))
            }
          >
            <View style={styles.View_624_12584}>
              <Text style={styles.Text_624_12584}>Home </Text>
            </View>
            <View style={styles.View_624_12585}>
              <View style={styles.View_I624_12585_19_31105}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/189571a9-3391-4c2e-a627-6240a5891417"
                  }}
                  style={styles.ImageBackground_I624_12585_19_31106}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12586}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12684"))
            }
          >
            <View style={styles.View_624_12587}>
              <Text style={styles.Text_624_12587}>Articles</Text>
            </View>
            <View style={styles.View_624_12588}>
              <View style={styles.View_I624_12588_19_16252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c74b278c-dd52-4a9a-93d6-fe1017cfb4ee"
                  }}
                  style={styles.ImageBackground_I624_12588_19_16253}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_624_12589}>
          <Text style={styles.Text_624_12589}>Security</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e2f33ce-7b96-4444-b722-e5dd305d574c"
          }}
          style={styles.ImageBackground_624_12590}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e94fa16f-6561-4562-a938-fd087367b6e7"
          }}
          style={styles.ImageBackground_624_12591}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4deca211-7e00-408b-a588-8e21782d3ce5"
          }}
          style={styles.ImageBackground_624_12592}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45bfd786-b65c-478d-8952-450c6a76d0e1"
          }}
          style={styles.ImageBackground_624_12593}
        />
        <View style={styles.View_624_12594}>
          <Text style={styles.Text_624_12594}>Change Password</Text>
        </View>
        <View style={styles.View_624_12595}>
          <Text style={styles.Text_624_12595}>Current Password</Text>
        </View>
        <View style={styles.View_624_12596}>
          <View style={styles.View_I624_12596_430_6123}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa6d20a7-9a40-43c5-b735-76d21ac1909d"
              }}
              style={styles.ImageBackground_I624_12596_430_6124}
            />
          </View>
        </View>
        <View style={styles.View_624_12597}>
          <Text style={styles.Text_624_12597}>New Password</Text>
        </View>
        <View style={styles.View_624_12598}>
          <View style={styles.View_I624_12598_430_6123}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5720f173-d4af-47ae-8ece-8f09f841f09c"
              }}
              style={styles.ImageBackground_I624_12598_430_6124}
            />
          </View>
        </View>
        <View style={styles.View_624_12599}>
          <Text style={styles.Text_624_12599}>Confirm Password</Text>
        </View>
        <View style={styles.View_624_12600}>
          <View style={styles.View_I624_12600_430_6123}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe5a9bec-1bb4-4a3d-9e24-c504544af5f7"
              }}
              style={styles.ImageBackground_I624_12600_430_6124}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_624_12568: {
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
  View_624_12569: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12570: {
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
  View_624_12571: {
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
  View_I624_12571_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12571_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I624_12571_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I624_12571_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12571_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I624_12571_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12571_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  ImageBackground_I624_12571_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_624_12572: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12572_19_13484: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12572_19_13485: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_624_12573: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("20%")
  },
  View_624_12574: {
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
  View_624_12575: {
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
  View_624_12576: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12576_19_9727: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_624_12577: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%")
  },
  View_624_12578: {
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
  Text_624_12578: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12579: {
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
  View_I624_12579_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12579_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12580: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%")
  },
  View_624_12581: {
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
  Text_624_12581: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12582: {
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
  View_I624_12582_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12582_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12583: {
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
  View_624_12584: {
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
  Text_624_12584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12585: {
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
  View_I624_12585_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12585_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12586: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("2%")
  },
  View_624_12587: {
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
  Text_624_12587: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12588: {
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
  View_I624_12588_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12588_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12589: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_624_12589: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_624_12590: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("43%")
  },
  ImageBackground_624_12591: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("54%")
  },
  ImageBackground_624_12592: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("66%")
  },
  ImageBackground_624_12593: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("77%")
  },
  View_624_12594: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_624_12594: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12595: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_624_12595: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12596: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12596_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I624_12596_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12597: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("56%"),
    justifyContent: "center"
  },
  Text_624_12597: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12598: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12598_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I624_12598_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12599: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("68%"),
    justifyContent: "center"
  },
  Text_624_12599: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12600: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("68%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12600_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I624_12600_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
