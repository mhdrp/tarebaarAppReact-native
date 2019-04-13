package com.tarebaarapp;

import com.facebook.react.ReactActivity;
 /**
     * mhdrp
     * add  react-native-gesture-handler for reactnavigation
     */
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "tarebaarApp";
    }
    /**
             * mhdrp
             * add  react-native-gesture-handler for reactnavigation
             */

        @Override
        protected ReactActivityDelegate createReactActivityDelegate() {
            return new ReactActivityDelegate(this, getMainComponentName()) {
             @Override
              protected ReactRootView createRootView() {
              return new RNGestureHandlerEnabledRootView(MainActivity.this);
               }
              };
         }
    }
}
