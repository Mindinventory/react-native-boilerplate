echo "START_CLEAR"
rm -rf node_modules
echo "node_modules removed"

rm -rf Gemfile.lock
echo "Gemfile.lock removed"

rm -rf vendor
echo "Bundle file removed"

rm -rf yarn.lock
echo "yarn.lock removed"

rm -rf android/build
echo "android/build removed"

rm -rf android/app/build
echo "android/app/build removed"

rm -rf ios/Pods/
echo "ios/Pods/  removed"

rm -rf ios/Podfile.lock
echo "ios/Podfile.lock removed"

rm -rf android/.idea/
echo "android/.idea/ removed"

echo "CLEAR_DONE - START_YARN"

yarn
echo "YARN_DONE - Start Bundle iOS"

bundle
echo "bundle done - Start_pod install"

npx pod-install --ios
echo "Finished"
