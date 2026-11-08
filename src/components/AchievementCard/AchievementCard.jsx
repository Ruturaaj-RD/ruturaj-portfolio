function AchievementCard({ achievement }) {
  return (
    <article className="group flex gap-4 rounded-card border border-line bg-surface/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-soft sm:p-6">

      {/* Highlighted Value */}

      <div className="flex h-14 min-w-16 shrink-0 items-center justify-center rounded-xl bg-accent/10 px-2 font-display text-xl font-bold text-accent">

        {achievement.value}

      </div>


      {/* Achievement Details */}

      <div className="min-w-0">

        <p className="text-[10px] font-bold tracking-[0.16em] text-accent-teal">
          {achievement.label}
        </p>


        <h3 className="mt-2 text-sm font-semibold leading-6 text-foreground sm:text-base">
          {achievement.title}
        </h3>


        <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">
          {achievement.description}
        </p>

      </div>

    </article>
  );
}

export default AchievementCard;