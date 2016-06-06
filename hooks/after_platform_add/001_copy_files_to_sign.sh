#!/bin/bash

if [ -d "platforms/android" ]; then
  echo "Copying keystore and properties files to mobile_app/android/"
  cp spyFall.keystore platforms/android/
  cp release-signing.properties platforms/android/
fi