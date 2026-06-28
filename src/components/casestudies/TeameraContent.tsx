import { ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../../types';

interface TeameraContentProps {
  project: Project;
}

export const TeameraContent = ({ project }: TeameraContentProps) => (
  <>
    <section>
      <h2 className="casestudy-section-title">Problem Statement</h2>
      <p className="casestudy-body-text mb-12">
        Many founders and innovators struggle to find the right teammates to bring their ideas to life. Existing platforms focus either on hiring or networking, but lack dedicated tools for startup team formation and project collaboration.
      </p>
    </section>

    <section>
      <h2 className="casestudy-section-title">Target Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.targetUsers?.map((user, idx) => (
          <div key={idx} className="p-6 bg-white/30 rounded-2xl border border-brand-text/5">
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">{user.title}</h4>
            <ul className="space-y-2">
              {user.points.map((point, pIdx) => (
                <li key={pIdx} className="text-xs text-brand-muted flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand-text/30" /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.coreFeatures?.map((feature, idx) => (
          <div key={idx} className="casestudy-dark-card">
            <h4 className="text-xl font-serif mb-4">{feature.title}</h4>
            <ul className="space-y-3 opacity-70">
              {feature.points.map((point, pIdx) => (
                <li key={pIdx} className="text-xs flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">User Workflow</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-brand-text/10 hidden md:block" />
        <div className="space-y-8 md:pl-12">
          {project.workflow?.map((step, idx) => (
            <div key={idx} className="relative flex items-center gap-6">
              <div className="hidden md:flex absolute -left-12 w-6 h-6 rounded-full bg-brand-bg border border-brand-text/20 items-center justify-center text-[10px] font-bold z-10">{idx + 1}</div>
              <div className="p-5 bg-white/40 rounded-2xl border border-brand-text/5 flex-grow">
                <p className="text-sm font-medium">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Technical Implementation</h2>
      <p className="casestudy-body-text mb-8">
        One of the most complex parts of the Teamera ecosystem is managing the multi-state application lifecycle for team recruitment.
      </p>
      <div className="bg-gray-900 rounded-[32px] p-8 md:p-12 border border-white/10 shadow-2xl">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Application Status Enum</h4>
            <p className="text-white/40 text-[10px] tracking-widest uppercase">applications.status · six-state lifecycle</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="font-mono text-[11px] leading-relaxed text-blue-300 bg-black/30 p-6 rounded-2xl border border-white/5">
            <span className="text-pink-400">enum</span> <span className="text-yellow-400">ApplicationStatus</span> {'{'} <br />
            &nbsp;&nbsp;PENDING,  <span className="text-white/30">// awaiting review</span><br />
            &nbsp;&nbsp;ACCEPTED, <span className="text-white/30">// joins workspace</span><br />
            &nbsp;&nbsp;REJECTED, <span className="text-white/30">// declined</span><br />
            &nbsp;&nbsp;INVITED,  <span className="text-white/30">// founder-initiated</span><br />
            &nbsp;&nbsp;REMOVED,  <span className="text-white/30">// removed by founder</span><br />
            &nbsp;&nbsp;QUIT      <span className="text-white/30">// member exited</span><br />
            {'}'}
          </div>
          <div className="space-y-4">
            <p className="text-xs text-white/60 leading-relaxed">
              The application system uses a state machine to handle transitions between candidate discovery and formal team onboarding.
            </p>
            <ul className="space-y-2">
              {['Real-time updates via Socket.io', 'Strict permission checks', 'Automated workspace triggers'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                  <div className="w-1 h-1 rounded-full bg-blue-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">System Architecture</h2>
      <div className="p-12 bg-white/50 border border-brand-text/5 rounded-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {project.architecture?.map((layer, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-text text-white flex items-center justify-center mx-auto mb-6 text-sm font-bold">{idx + 1}</div>
              <h4 className="font-bold text-sm mb-2">{layer.layer}</h4>
              <p className="text-xs text-brand-muted">{layer.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20">
      <h2 className="casestudy-section-title">Key Achievements</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.achievements?.map((achievement, idx) => (
          <li key={idx} className="p-6 bg-white/40 rounded-2xl border border-brand-text/5 text-sm font-medium leading-relaxed">
            {achievement}
          </li>
        ))}
      </ul>
    </section>
  </>
);
