echo "START_CLEAR"
rm -rf node_modules
echo "node_modules removed"

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
echo "YARN_DONE - START_POD"
npx pod-install --ios
