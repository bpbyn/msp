import Shell from '@/components/shell';

export default function Home() {
  return (
    <Shell>
      <div className={`p-4 pt-6 h-full rounded-tl-2xl bg-[#F6F6F6] shadow`}>
        <div className="scroll-m-20 text-xl font-medium tracking-wide">
          Payment Methods
        </div>
      </div>
    </Shell>
  );
}
