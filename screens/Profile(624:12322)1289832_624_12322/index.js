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
      <View style={styles.View_624_12323}>
        <View style={styles.View_624_12324} />
        <View style={styles.View_624_12325}>
          <View style={styles.View_I624_12325_119_97}>
            <Text style={styles.Text_I624_12325_119_97}>4:00</Text>
          </View>
          <View style={styles.View_I624_12325_119_98}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abda948c-81c0-43be-924b-9c289edadfe4"
              }}
              style={styles.ImageBackground_I624_12325_119_99}
            />
          </View>
          <View style={styles.View_I624_12325_119_104}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a0df977-3570-4086-bf37-a1a79d9ec8d9"
              }}
              style={styles.ImageBackground_I624_12325_119_105}
            />
          </View>
          <View style={styles.View_I624_12325_119_109}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43e17fbc-c272-4c54-b52b-9fe505c3bf90"
              }}
              style={styles.ImageBackground_I624_12325_119_110}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_624_12326}>
        <View style={styles.View_624_12327} />
        <TouchableOpacity
          style={styles.TouchableOpacity_624_12328}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("624_12957"))
          }
        >
          <View style={styles.View_624_12329}>
            <Text style={styles.Text_624_12329}>Budget</Text>
          </View>
          <View style={styles.View_624_12330}>
            <View style={styles.View_I624_12330_19_9727}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55c94f99-dce1-4304-85fe-46cbd6dcbd8e"
                }}
                style={styles.ImageBackground_I624_12330_19_9728}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_624_12331}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("624_12684"))
          }
        >
          <View style={styles.View_624_12332}>
            <Text style={styles.Text_624_12332}>Articles</Text>
          </View>
          <View style={styles.View_624_12333}>
            <View style={styles.View_I624_12333_19_16252}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e17a9df4-b06a-478c-bbfc-cca768c211b7"
                }}
                style={styles.ImageBackground_I624_12333_19_16253}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_624_12334}>
          <View style={styles.View_624_12335}>
            <Text style={styles.Text_624_12335}>Profile</Text>
          </View>
          <View style={styles.View_624_12336}>
            <View style={styles.View_I624_12336_19_14754}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a51d84cd-cbef-4ed4-b48a-08d0942b2127"
                }}
                style={styles.ImageBackground_I624_12336_19_14755}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_624_12337}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("733_9124"))
          }
        >
          <View style={styles.View_624_12338}>
            <Text style={styles.Text_624_12338}>Home </Text>
          </View>
          <View style={styles.View_624_12339}>
            <View style={styles.View_I624_12339_19_31105}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ce748f3-1fef-44e0-acaf-ea865fc3eee2"
                }}
                style={styles.ImageBackground_I624_12339_19_31106}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_624_12340}>
        <View style={styles.View_624_12341}>
          <View style={styles.View_624_12342} />
          <View style={styles.View_624_12349}>
            <View style={styles.View_624_12350}>
              <View style={styles.View_624_12351}>
                <Text style={styles.Text_624_12351}>John Smith</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0667a8e2-4d04-4c1e-a728-c35c99f49752"
          }}
          style={styles.ImageBackground_624_12353}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fd7f2f5-5dd3-478a-a69b-c38a9aae257d"
          }}
          style={styles.ImageBackground_624_12356}
        />
      </View>
      <View style={styles.View_624_12357}>
        <View style={styles.View_624_12358}>
          <View style={styles.View_624_12359} />
          <View style={styles.View_624_12394}>
            <View style={styles.View_624_12395}>
              <View style={styles.View_624_12396}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_624_12397}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("624_12284")
                    )
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5d2f212-ac22-4333-ad2a-8969bbcc69d4"
                    }}
                    style={styles.ImageBackground_624_12398}
                  />
                  <View style={styles.View_624_12400}>
                    <Text style={styles.Text_624_12400}>My Account </Text>
                  </View>
                  <View style={styles.View_624_12401}>
                    <Text style={styles.Text_624_12401}>
                      Make changes to your account
                    </Text>
                  </View>
                  <View style={styles.View_624_12402}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb998d90-8efd-4e04-b741-989767d3b7a3"
                      }}
                      style={styles.ImageBackground_624_12403}
                    />
                    <View style={styles.View_624_12404}>
                      <View style={styles.View_I624_12404_19_14754}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9e4ee49-9059-46d3-84a9-491266d827af"
                          }}
                          style={styles.ImageBackground_I624_12404_19_14755}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_624_12405}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("624_12853"))
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_624_12410}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("624_12853")
                  )
                }
              >
                <View style={styles.View_624_12411}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7f19e19-8456-443a-ae26-bce5501c3dba"
                    }}
                    style={styles.ImageBackground_624_12412}
                  />
                  <View style={styles.View_624_12414}>
                    <Text style={styles.Text_624_12414}>
                      Linked Bank Accounts
                    </Text>
                  </View>
                  <View style={styles.View_624_12415}>
                    <Text style={styles.Text_624_12415}>
                      Manage your linked accounts
                    </Text>
                  </View>
                  <View style={styles.View_624_12416}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eebfe861-c121-4b7c-8938-2c3545a22a8f"
                      }}
                      style={styles.ImageBackground_624_12417}
                    />
                    <View style={styles.View_624_12418} />
                    <View style={styles.View_624_12419}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90e1df31-d754-438a-933d-a81bd6ec1943"
                        }}
                        style={styles.ImageBackground_624_12420}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.View_624_12428}>
              <View style={styles.View_624_12429}>
                <View style={styles.View_624_12430}>
                  <View style={styles.View_624_12431}>
                    <Text style={styles.Text_624_12431}>
                      Face ID / Touch ID
                    </Text>
                  </View>
                  <View style={styles.View_624_12432}>
                    <Text style={styles.Text_624_12432}>
                      Manage your device security
                    </Text>
                  </View>
                </View>
                <View style={styles.View_624_12433}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e754cbf3-5912-4bf9-a92e-c7ba8d041b73"
                    }}
                    style={styles.ImageBackground_624_12434}
                  />
                  <View style={styles.View_624_12435}>
                    <View style={styles.View_I624_12435_19_40314}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4498207-d3a3-48e6-946a-c352879df9bf"
                        }}
                        style={styles.ImageBackground_I624_12435_19_40315}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_624_12436}>
                <View style={styles.View_624_12437} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f7b4608-3cc5-48c0-a320-1e7ff887ffaa"
                  }}
                  style={styles.ImageBackground_624_12438}
                />
              </View>
            </View>
            <View style={styles.View_624_12439}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12a15a80-b2f9-4a3e-89d3-fa5e6092235c"
                }}
                style={styles.ImageBackground_624_12440}
              />
              <View style={styles.View_624_12442}>
                <View style={styles.View_624_12443}>
                  <View style={styles.View_624_12444}>
                    <Text style={styles.Text_624_12444}>
                      Two-Factor Authentication
                    </Text>
                  </View>
                  <View style={styles.View_624_12445}>
                    <Text style={styles.Text_624_12445}>
                      Further secure your account for safety
                    </Text>
                  </View>
                </View>
                <View style={styles.View_624_12446}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/078f07b6-c623-4fd3-97b1-552e9d6e69e1"
                    }}
                    style={styles.ImageBackground_624_12447}
                  />
                  <View style={styles.View_624_12448}>
                    <View style={styles.View_I624_12448_19_41267}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83696f33-1a3b-4bb8-b87c-ee77ff13d4dc"
                        }}
                        style={styles.ImageBackground_I624_12448_19_41268}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_624_12449}>
              <View style={styles.View_624_12450}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_624_12451}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("624_12567")
                    )
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aaa8d52-b8b1-465c-bc05-b493b96f0964"
                    }}
                    style={styles.ImageBackground_624_12452}
                  />
                  <View style={styles.View_624_12454}>
                    <Text style={styles.Text_624_12454}>Change Password</Text>
                  </View>
                  <View style={styles.View_624_12455}>
                    <Text style={styles.Text_624_12455}>
                      Further secure your account for safety
                    </Text>
                  </View>
                  <View style={styles.View_624_12456}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ec28212-8cf2-4f79-97de-85324a564368"
                      }}
                      style={styles.ImageBackground_624_12457}
                    />
                    <View style={styles.View_624_12458}>
                      <View style={styles.View_I624_12458_19_11681}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e12d719-84c2-47ee-970d-a9df797d67a0"
                          }}
                          style={styles.ImageBackground_I624_12458_19_11682}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_624_12459}>
        <View style={styles.View_624_12460}>
          <View style={styles.View_624_12461} />
          <View style={styles.View_624_12480}>
            <View style={styles.View_624_12481}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a32ab8a-c0de-4f9a-8851-03c23057f1ba"
                }}
                style={styles.ImageBackground_624_12482}
              />
              <View style={styles.View_624_12484}>
                <View style={styles.View_624_12485}>
                  <View style={styles.View_624_12486}>
                    <Text style={styles.Text_624_12486}>
                      Help &amp; Support
                    </Text>
                  </View>
                </View>
                <View style={styles.View_624_12487}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bd92548-5499-4995-a480-8989af286caf"
                    }}
                    style={styles.ImageBackground_624_12488}
                  />
                  <View style={styles.View_624_12489}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d17997b6-da97-4b0e-a6ac-78663476bada"
                      }}
                      style={styles.ImageBackground_624_12490}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_624_12493}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2de4a94-db6a-4812-8adb-adfa8ef72a69"
                }}
                style={styles.ImageBackground_624_12494}
              />
              <View style={styles.View_624_12496}>
                <View style={styles.View_624_12497}>
                  <View style={styles.View_624_12498}>
                    <Text style={styles.Text_624_12498}>About App</Text>
                  </View>
                </View>
                <View style={styles.View_624_12499}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a520a591-3123-4706-9695-b93dd0b41071"
                    }}
                    style={styles.ImageBackground_624_12500}
                  />
                  <View style={styles.View_624_12501}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/805ca98e-92bf-4159-a515-01227bfc995c"
                      }}
                      style={styles.ImageBackground_I624_12501_357_2569}
                    />
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
  ScrollView_1: { backgroundColor: "rgba(240, 244, 250, 1)" },
  View_2: { height: hp("115%") },
  View_624_12323: {
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
  View_624_12324: {
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
  View_624_12325: {
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
  View_I624_12325_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12325_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I624_12325_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I624_12325_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12325_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I624_12325_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12325_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  ImageBackground_I624_12325_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12326: {
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
  View_624_12327: {
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
  TouchableOpacity_624_12328: {
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
  View_624_12329: {
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
  Text_624_12329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12330: {
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
  View_I624_12330_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12330_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12331: {
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
  View_624_12332: {
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
  Text_624_12332: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12333: {
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
  View_I624_12333_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12333_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12334: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  View_624_12335: {
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
  Text_624_12335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12336: {
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
  View_I624_12336_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12336_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12337: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_624_12338: {
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
  Text_624_12338: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12339: {
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
  View_I624_12339_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12339_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12340: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_624_12341: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12342: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)"
  },
  View_624_12349: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%")
  },
  View_624_12350: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12351: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_624_12351: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_624_12353: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_624_12356: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_624_12357: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_624_12358: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12359: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)"
  },
  View_624_12394: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_624_12395: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12396: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_624_12397: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12398: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_624_12400: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_624_12400: {
    color: "rgba(24, 29, 39, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12401: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_624_12401: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12402: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12403: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12404: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12404_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12404_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12405: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  TouchableOpacity_624_12410: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12411: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12412: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_624_12414: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_624_12414: {
    color: "rgba(24, 29, 39, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12415: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_624_12415: {
    color: "rgba(171, 171, 171, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12416: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12417: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12418: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_624_12419: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_624_12420: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12428: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  View_624_12429: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12430: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_624_12431: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_624_12431: {
    color: "rgba(24, 29, 39, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12432: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_624_12432: {
    color: "rgba(171, 171, 171, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12433: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12434: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12435: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12435_19_40314: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12435_19_40315: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12436: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%")
  },
  View_624_12437: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  },
  ImageBackground_624_12438: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_624_12439: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  ImageBackground_624_12440: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_624_12442: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12443: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_624_12444: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_624_12444: {
    color: "rgba(24, 29, 39, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12445: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_624_12445: {
    color: "rgba(171, 171, 171, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12446: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12447: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12448: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12448_19_41267: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12448_19_41268: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12449: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  View_624_12450: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_624_12451: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12452: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_624_12454: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_624_12454: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12455: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_624_12455: {
    color: "rgba(171, 171, 171, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12456: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12457: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12458: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12458_19_11681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12458_19_11682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12459: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("80%"),
    backgroundColor: "rgba(240, 244, 250, 1)"
  },
  View_624_12460: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12461: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)"
  },
  View_624_12480: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(240, 244, 250, 1)"
  },
  View_624_12481: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12482: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_624_12484: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12485: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_624_12486: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_624_12486: {
    color: "rgba(24, 29, 39, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12487: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12488: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12489: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(240, 244, 250, 1)"
  },
  ImageBackground_624_12490: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_624_12493: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  ImageBackground_624_12494: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_624_12496: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12497: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_624_12498: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_624_12498: {
    color: "rgba(24, 29, 39, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12499: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12500: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12501: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(240, 244, 250, 1)"
  },
  ImageBackground_I624_12501_357_2569: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
