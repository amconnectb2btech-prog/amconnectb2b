import { Link } from 'react-router-dom'
import logoIcon from '../../assets/logo_icon.png'
import logoText from '../../assets/logo_text.png' 

/**
 * Logo: Renders premium asset images for the icon and wordmark.
 */
export default function Logo({ className = '', variant = 'dark' }) {
  // Use Tailwind's brightness or invert filters to easily toggle the text logo color based on variant
  const textVariantClass = variant === 'light' ? 'invert brightness-200' : ''

  return (
    <Link to="/" className={`inline-flex items-center gap-1 ${className}`}>
      {/* Logo Icon Container */}
      <div className="flex items-center justify-center h-10 overflow-hidden">
        <img 
          src={logoIcon} 
          alt="AMConnect Icon" 
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      
      {/* Logo Text / Wordmark Container */}
      <div className={`mt-1 h-8 flex items-center ${textVariantClass}`}>
        <img 
          src={logoText} 
          alt="AMConnect B2B" 
          className="h-full w-auto object-contain"
          loading="eager"
        />
      </div>
    </Link>
  )
}




// import { Link } from 'react-router-dom'

// /**
//  * Logo: square brand mark + wordmark.
//  * The mark is two interlocking shapes suggesting "connect".
//  */
// export default function Logo({ className = '', variant = 'dark' }) {
//   const textColor = variant === 'light' ? 'text-white' : 'text-slate-900'
//   return (
//     <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`}>
//       <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-md brand-bg">
//         <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none">
//           <path d="M4 8a4 4 0 014-4h4v4h-4v4H4V8z" fill="currentColor" opacity="0.85"/>
//           <path d="M20 16a4 4 0 01-4 4h-4v-4h4v-4h4v4z" fill="currentColor"/>
//         </svg>
//       </span>
//       <span className={`flex items-baseline ${textColor}`}>
//         <span className="font-bold text-[17px] tracking-tight">AMConnect</span>
//         <span className="font-semibold text-[17px] brand-text">B2B</span>
//       </span>
//     </Link>
//   )
// }
