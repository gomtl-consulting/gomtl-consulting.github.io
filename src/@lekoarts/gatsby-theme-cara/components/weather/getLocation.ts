export const IS_GEOLOCATION_SUPPORTED = 'geolocation' in navigator;

/**
 * Retrieves the current location of the user.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
 */
export async function getLocation(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
