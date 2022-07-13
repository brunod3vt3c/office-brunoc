import * as React from "react";

const SvgMeter3 = (props) => (
  <svg
    width={204}
    height={204}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M187.639 69.902c5.453-2.043 11.587.712 13.057 6.346a101.996 101.996 0 0 1-4.26 64.298 101.997 101.997 0 0 1-125.454 58.623A101.998 101.998 0 0 1 44.894 17.484a102 102 0 0 1 129.897 13.063c4.078 4.155 3.292 10.833-1.262 14.462-4.554 3.628-11.144 2.818-15.334-1.226a80.914 80.914 0 1 0 22.62 39.905c-1.318-5.672 1.372-11.742 6.824-13.786Z"
      fill="url(#meter3_svg__a)"
    />
    <path
      d="M66.08 99.16c0 4.644 3.24 8.352 7.956 8.352.612 0 1.044-.072 1.296-.216L69.896 115h7.632l5.544-8.82c1.404-2.268 2.304-4.86 2.304-7.2 0-5.256-4.068-9.18-9.648-9.18-5.472 0-9.648 3.96-9.648 9.36Zm6.336-.252c0-1.836 1.476-3.24 3.348-3.24 1.872 0 3.312 1.44 3.312 3.276 0 1.836-1.44 3.24-3.312 3.24-1.872 0-3.348-1.44-3.348-3.276Zm37.249 3.744c0-6.804-3.888-12.852-10.944-12.852-7.092 0-10.98 6.048-10.98 12.852s3.888 12.852 10.98 12.852c7.056 0 10.944-6.048 10.944-12.852Zm-6.696 0c0 3.348-1.296 6.624-4.248 6.624-2.988 0-4.284-3.276-4.284-6.624s1.296-6.624 4.284-6.624c2.952 0 4.248 3.276 4.248 6.624Zm21.552-6.624c0-3.42-2.772-6.084-6.336-6.084-3.564 0-6.336 2.664-6.336 6.084 0 3.42 2.772 6.084 6.336 6.084 3.564 0 6.336-2.664 6.336-6.084Zm-4.248 0c0 1.26-.9 2.124-2.088 2.124-1.188 0-2.088-.864-2.088-2.124 0-1.26.9-2.124 2.088-2.124 1.188 0 2.088.864 2.088 2.124Zm17.748-5.76h-5.508L114.153 115h5.508l18.36-24.732Zm-10.368 18.972c0 3.42 2.772 6.084 6.336 6.084 3.564 0 6.336-2.664 6.336-6.084 0-3.42-2.772-6.084-6.336-6.084-3.564 0-6.336 2.664-6.336 6.084Zm4.248 0c0-1.26.9-2.124 2.088-2.124 1.188 0 2.088.864 2.088 2.124 0 1.26-.9 2.124-2.088 2.124-1.188 0-2.088-.864-2.088-2.124Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="meter3_svg__a"
        x1={-12.435}
        y1={91.215}
        x2={228.124}
        y2={92.098}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AA367C" />
        <stop offset={1} stopColor="#4A2FBD" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMeter3;