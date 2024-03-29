export default function Arrow() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.01" />
        <path
          d="M8.30602 11.4164L14.2164 5.50602C14.6244 5.09799 15.286 5.09799 15.694 5.50602C16.102 5.91404 16.102 6.57558 15.694 6.98361L9.78361 12.894V11.4164L15.694 17.3268C16.102 17.7348 16.102 18.3963 15.694 18.8043C15.286 19.2124 14.6244 19.2124 14.2164 18.8043L8.30602 12.894C7.89799 12.486 7.89799 11.8244 8.30602 11.4164Z"
          fill="black"
        />
        <mask
          id="arrow-mask0"
          maskUnits="userSpaceOnUse"
          x="8"
          y="5"
          width="8"
          height="15"
        >
          <path
            d="M8.30602 11.4164L14.2164 5.50602C14.6244 5.09799 15.286 5.09799 15.694 5.50602C16.102 5.91404 16.102 6.57558 15.694 6.98361L9.78361 12.894V11.4164L15.694 17.3268C16.102 17.7348 16.102 18.3963 15.694 18.8043C15.286 19.2124 14.6244 19.2124 14.2164 18.8043L8.30602 12.894C7.89799 12.486 7.89799 11.8244 8.30602 11.4164Z"
            fill="white"
          />
        </mask>
        <g mask="url(#arrow-mask0)">
          <rect x="4" y="4" width="16" height="16" fill="#292A2C" />
        </g>
      </svg>
    );
  }
  