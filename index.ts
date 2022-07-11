/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: { lat: -33, lng: 151 },
    }
  );

  // const image =
  //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const image =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAVtSURBVEhLtZV7TJVlHMc/54UDh9sRBBKhgVxURGVGigI2DJ2WeWvmrObc0nLNmlNr3kpztuWtWsmardFFl1rLdKLmSpslRnlFhJSpRxEPSICcA8I5wDm8p9/7nhPgQLM/+m6H58fzPr/L93d5HoOSs9vD/wzFtz4cDL7ff8S/OlGFp+pwo9Y5UG80o1qaUKtkbXCiOl08TBoemC7V1g4tTpYtGsX0pwfxZMYA2VVwd7ooLKrhyE+VFBSUQZwZJdTI/Tz26USLnit32LopmzcXZuh7VX81c/BEDXea2xkYFcz8qfEEGgP1b/PWHGdXQQWGoeEY+nDUy4mqeai5S2vFAoJNRvJ3XmDJO6fALcXo5y9rfzkkDJttMDCQwx/lMTU3gcuWO6Rl7kFJi+zF6B4nqvbHYqPz9quSFIWIsTux290QZUKR6qlNKVRPeEYYOIk6sR+M9WC9S3pWDKXfzuR6tZ3kUbtQUiWQHo7uLXzVXYoOzdIdmEYUYFdFig5CERJqawyVubOIDWogsn+raDpFwYgh3szFS3aGzNpLUlw4a98ag2oXpj3Q5UR1qSSmRzD+8VhmLD1Ku58RJdBPvnikuwbyfMwxEsy3IQiGHX9fFALICqnE0y516Gfkapmdgm/K2bA0ExwdUtduKt1MpJO2rR6riwe/qkAxB4gkDpqSseTMY0/mRmZdWEnGH5uosI0iLqiG4idWcC17AR5ntNQnmFeWndD1178hzdLq0mUNXifagDU6mJYTz/r8MzDILPZVSdGj1E2cQlJwjZ5jj5xrdgeQZr6MNW+htLcYkHMYDF5DodIIxVaWzR+hB/0P9G+q20NwWri+cfR0LQT4iYM48ke+y47aKSA+c069x4GRm7mWs5wIo9SkA+o7w0gq2ofBVCeaEkGYkRO/WjGHmoSJONGCF3iZSNsmRofqouW2GBDlL9M38nrCMbLDLmE4uJ/imjwu2JOgDU5mr2J2yQYeOV4IIVViy2dNGN2od3jlqCAtGTq60tXWIa0qCAyQLb828q2TZYXsyHJKRi8hIuwGP9of43dbOmfqk0kyXyErughcYaLVXeRwk9ckbWLvHiZ+CparjbqYN0KKqHZwvmUIw4s+kDzDorLVNE58gZUp37NLir6lZgZbh35N8bh1pJqvonZqTSJwq8QneNNOi1sjpkN3og0atk5N5KnJ8dDUgWK8y6XWRAzfneT0lMV6msrtcXxyeRl7b86kskmCkb3L2ctllTtNu0+qW1j18nCOnLZCZHAXQS8T7R9pwbe3nWXupGRJgUvKJB3jLwMXXEfG8S3cckWwwTqHxinjpWYmEn8pxKEamXxuDZjqhbyHlLHR+Mt8bf9CLk19BLzoulb0Gt2w4alezNnyWsZM2IcyLEICkFlxB+Mv1F3TnwU7XHfGkFy805tzY4sE04Z6sY72htcwykEl+lPR7b5afFXyCTFmxr90mNEjYtiyaRxqhQ1VmwF/B9LlDPv5Q2EGSTHS5lobmxpEUd6V0npKfptLgNGfyJzdMFgLTjerw88QP3u9T8ZgVKgqs9FhcLFu8Rhyxw9gR34pHlEmwE1DRyzFTYM5VDuKPxu12sk02tuoLJ1HalIkmfMKsVidKCY53wO93xNJgXqrhekzEyn8eJK+tfmzErYfsHCzVIauRR4nyXdGVj8Wz0ll4XOp+pmhM/dyxSKpC/e+MT3R56OlQW2RkXa42PXhBF6cluLb7Y2tn59nxVp5b+LCfBdqb9zXiQb9JtXuoAYHI3PjyB0ehSnESHOTkx/O1WE9I8xiZRiFWVdx+8ADnfSE9hTI46559g6W1E+RX88C3w8PCuAeaAaVIHljQiTqIH/puIdzAPA3AlkN0RwT/VcAAAAASUVORK5CYII=';
  const beachMarker = new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map,
    icon: image,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
