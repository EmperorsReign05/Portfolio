"use client";

export default function RetroBackground() {
  return (
    <div className="retro-background">
      {/* Stars for Dark Mode */}
      <div className="star" style={{ top: '5%', left: '10%', width: '2px', height: '2px', animationDelay: '0s' }}></div>
      <div className="star" style={{ top: '15%', left: '25%', width: '3px', height: '3px', animationDelay: '1.5s' }}></div>
      <div className="star" style={{ top: '8%', left: '70%', width: '2px', height: '2px', animationDelay: '2s' }}></div>
      <div className="star" style={{ top: '25%', left: '85%', width: '4px', height: '4px', animationDelay: '0.5s' }}></div>
      <div className="star" style={{ top: '35%', left: '40%', width: '2px', height: '2px', animationDelay: '3s' }}></div>
      <div className="star" style={{ top: '45%', left: '10%', width: '3px', height: '3px', animationDelay: '1s' }}></div>
      <div className="star" style={{ top: '12%', left: '55%', width: '2px', height: '2px', animationDelay: '2.5s' }}></div>
      <div className="star" style={{ top: '55%', left: '90%', width: '3px', height: '3px', animationDelay: '0.8s' }}></div>
      <div className="star" style={{ top: '65%', left: '20%', width: '2px', height: '2px', animationDelay: '3.2s' }}></div>
      <div className="star" style={{ top: '75%', left: '60%', width: '4px', height: '4px', animationDelay: '1.2s' }}></div>
      <div className="star" style={{ top: '20%', left: '95%', width: '2px', height: '2px', animationDelay: '2.8s' }}></div>
      <div className="star" style={{ top: '85%', left: '30%', width: '3px', height: '3px', animationDelay: '0.2s' }}></div>
      <div className="star" style={{ top: '30%', left: '5%', width: '2px', height: '2px', animationDelay: '1.8s' }}></div>

      {/* Moon - Optional but fits the theme */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-transparent shadow-[inset_-10px_-10px_0_0_#fff] opacity-0 transition-opacity duration-1000 dark:opacity-80 rotate-[-45deg]"></div>
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>

      <div className="pipe pipe1"></div>
      <div className="pipe pipe2"></div>
    </div>
  );
}