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
      <View style={styles.View_700_6946}>
        <View style={styles.View_700_6947}>
          <View style={styles.View_700_6948} />
          <View style={styles.View_700_6949}>
            <View style={styles.View_I700_6949_119_97}>
              <Text style={styles.Text_I700_6949_119_97}>4:00</Text>
            </View>
            <View style={styles.View_I700_6949_119_98}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94cd047d-b3d5-4e6b-b3ea-4d1aaa4d4c0e"
                }}
                style={styles.ImageBackground_I700_6949_119_99}
              />
            </View>
            <View style={styles.View_I700_6949_119_104}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f54ae6ac-ff9d-4274-a352-928ee0e285cf"
                }}
                style={styles.ImageBackground_I700_6949_119_105}
              />
            </View>
            <View style={styles.View_I700_6949_119_109}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b849bed-0b7d-4144-9dd1-cad068664ddd"
                }}
                style={styles.ImageBackground_I700_6949_119_110}
              />
            </View>
          </View>
          <View style={styles.View_700_6950}>
            <Text style={styles.Text_700_6950}>Bank Accounts</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_700_6951}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12322"))
            }
          >
            <View style={styles.View_I700_6951_19_13484}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9da05aa-052c-455b-8874-68a75b5b3381"
                }}
                style={styles.ImageBackground_I700_6951_19_13485}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_700_6954}>
          <View style={styles.View_700_6955}>
            <Text style={styles.Text_700_6955}>Profile</Text>
          </View>
          <View style={styles.View_700_6956}>
            <View style={styles.View_I700_6956_19_14754}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf070004-05cc-4da5-aa17-1f840c86d0e6"
                }}
                style={styles.ImageBackground_I700_6956_19_14755}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_700_6960}>
          <View style={styles.View_700_6961} />
          <View style={styles.View_700_6962}>
            <View style={styles.View_I700_6962_19_9727} />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_700_6963}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12957"))
            }
          >
            <View style={styles.View_700_6964}>
              <Text style={styles.Text_700_6964}>Budget</Text>
            </View>
            <View style={styles.View_700_6965}>
              <View style={styles.View_I700_6965_19_9727}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09bf3f66-74a2-4370-be90-539ff3ff6cfb"
                  }}
                  style={styles.ImageBackground_I700_6965_19_9728}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_700_6966}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12322"))
            }
          >
            <View style={styles.View_700_6967}>
              <Text style={styles.Text_700_6967}>Profile</Text>
            </View>
            <View style={styles.View_700_6968}>
              <View style={styles.View_I700_6968_19_14754}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af2ff249-2f1a-42f9-b8c9-698a02f4cd79"
                  }}
                  style={styles.ImageBackground_I700_6968_19_14755}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_700_6969}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("733_9124"))
            }
          >
            <View style={styles.View_700_6970}>
              <Text style={styles.Text_700_6970}>Home </Text>
            </View>
            <View style={styles.View_700_6971}>
              <View style={styles.View_I700_6971_19_31105}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d61401db-046a-4f7f-b33d-e4767ff8e0c2"
                  }}
                  style={styles.ImageBackground_I700_6971_19_31106}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_700_6972}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12684"))
            }
          >
            <View style={styles.View_700_6973}>
              <Text style={styles.Text_700_6973}>Articles</Text>
            </View>
            <View style={styles.View_700_6974}>
              <View style={styles.View_I700_6974_19_16252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38f77bcd-1b8a-4f98-a31e-b65a7a3191b5"
                  }}
                  style={styles.ImageBackground_I700_6974_19_16253}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_700_7092}>
          <View style={styles.View_700_7093}>
            <ImageBackground style={styles.ImageBackground_700_7094} />
          </View>
          <View style={styles.View_700_7095}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f590f966-07a6-41ca-90b9-f4c991bc47f6"
              }}
              style={styles.ImageBackground_I700_7095_2_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/378a59ae-a4c7-4891-9fca-d51d0a2e4d4d"
              }}
              style={styles.ImageBackground_I700_7095_2_10}
            />
          </View>
          <View style={styles.View_700_7096}>
            <Text style={styles.Text_700_7096}>
              This application uses Plaid to link your bank
            </Text>
          </View>
          <View style={styles.View_700_7097}>
            <View style={styles.View_700_7098}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f02e245e-9b2d-4334-8c8d-4539b8d8f2ed"
                }}
                style={styles.ImageBackground_I700_7098_466_1190}
              />
            </View>
            <View style={styles.View_700_7099}>
              <View style={styles.View_700_7100}>
                <Text style={styles.Text_700_7100}>Secure</Text>
              </View>
              <View style={styles.View_700_7101}>
                <Text style={styles.Text_700_7101}>
                  Transfer of your bank data is encrypted end-to-end
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_700_7102}>
            <View style={styles.View_700_7103}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5672a24-0886-4f71-b459-bef70359a7ea"
                }}
                style={styles.ImageBackground_I700_7103_466_1190}
              />
            </View>
            <View style={styles.View_700_7104}>
              <View style={styles.View_700_7105}>
                <Text style={styles.Text_700_7105}>Private</Text>
              </View>
              <View style={styles.View_700_7106}>
                <Text style={styles.Text_700_7106}>
                  This application will never be able to access your credentials
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_700_7107}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("700_7118"))
            }
          >
            <View style={styles.View_700_7108}>
              <Text style={styles.Text_700_7108}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("116%") },
  View_700_6946: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("116%"),
    minHeight: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    overflow: "hidden"
  },
  View_700_6947: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_700_6948: {
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
  View_700_6949: {
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
  View_I700_6949_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I700_6949_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I700_6949_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I700_6949_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I700_6949_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I700_6949_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I700_6949_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  ImageBackground_I700_6949_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_700_6950: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_700_6950: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_700_6951: {
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
  View_I700_6951_19_13484: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I700_6951_19_13485: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_700_6954: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("106%")
  },
  View_700_6955: {
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
  Text_700_6955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_700_6956: {
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
  View_I700_6956_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I700_6956_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_700_6960: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105%")
  },
  View_700_6961: {
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
  View_700_6962: {
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
  View_I700_6962_19_9727: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_700_6963: {
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
  View_700_6964: {
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
  Text_700_6964: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_700_6965: {
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
  View_I700_6965_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I700_6965_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_700_6966: {
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
  View_700_6967: {
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
  Text_700_6967: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_700_6968: {
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
  View_I700_6968_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I700_6968_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_700_6969: {
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
  View_700_6970: {
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
  Text_700_6970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_700_6971: {
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
  View_I700_6971_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I700_6971_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_700_6972: {
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
  View_700_6973: {
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
  Text_700_6973: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_700_6974: {
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
  View_I700_6974_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I700_6974_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_700_7092: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_700_7093: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_700_7094: {
    width: wp("60%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_700_7095: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I700_7095_2_7: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  ImageBackground_I700_7095_2_10: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_700_7096: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_700_7096: {
    color: "rgba(7, 7, 7, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_700_7097: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_700_7098: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I700_7098_466_1190: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_700_7099: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_700_7100: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_700_7100: {
    color: "rgba(7, 7, 7, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_700_7101: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_700_7101: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_700_7102: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_700_7103: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I700_7103_466_1190: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_700_7104: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_700_7105: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_700_7105: {
    color: "rgba(7, 7, 7, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_700_7106: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_700_7106: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_700_7107: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("79%"),
    backgroundColor: "rgba(17, 17, 17, 1)",
    overflow: "hidden"
  },
  View_700_7108: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_700_7108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
