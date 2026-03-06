export default function CodePreview() {
    return (
        <div className="relative w-full max-w-[640px] lg:max-w-[720px] rounded-xl border border-white/10 bg-[#1e1e1e]/80 backdrop-blur-xl p-6 text-[12.5px] md:text-[13px] font-mono shadow-2xl">

            <div className="flex gap-2 mb-5">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <pre className="leading-relaxed text-neutral-200">

                <div className="block md:hidden">

                    <span className="text-[#cc7832]">@Service</span>{"\n"}
                    <span className="text-[#cc7832]">public class</span>{" "}
                    <span className="text-[#ffc66d]">NewsService</span> {"{"}

                    {"\n"}  <span className="text-[#cc7832]">public</span>{" "}
                    <span className="text-[#ffc66d]">List</span>&lt;
                    <span className="text-[#ffc66d]">News</span>&gt;{" "}
                    <span className="text-[#ffc66d]">getNewsById</span>() {"{"}

                    {"\n"}    <span className="text-[#cc7832]">return</span> newsRepository
                    {"\n"}      .<span className="text-[#ffc66d]">findById</span>();
                    {"\n"}  {"}"}

                    {"\n"}{"}"}

                </div>

                <div className="hidden md:block">

                    {"\n"}
                    <span className="text-[#cc7832]">@Service</span>
                    {"\n"}
                    <span className="text-[#cc7832]">public class</span>{" "}
                    <span className="text-[#ffc66d]">NewsService</span> {"{"}

                    {"\n\n"}  <span className="text-[#cc7832]">private final</span>{" "}
                    <span className="text-[#ffc66d]">NewsRepository</span> newsRepository;

                    {"\n\n"}  <span className="text-[#cc7832]">public</span>{" "}
                    <span className="text-[#ffc66d]">NewsService</span>(
                    <span className="text-[#ffc66d]">NewsRepository</span> newsRepository) {"{"}
                    {"\n"}    <span className="text-[#cc7832]">this</span>.newsRepository = newsRepository;
                    {"\n"}  {"}"}

                    {"\n\n"}  <span className="text-[#cc7832]">public</span>{" "}
                    <span className="text-[#ffc66d]">List</span>&lt;
                    <span className="text-[#ffc66d]">News</span>&gt;{" "}
                    <span className="text-[#ffc66d]">getLatestNews</span>() {"{"}

                    {"\n"}    <span className="text-[#cc7832]">return</span> newsRepository
                    {"\n"}      .<span className="text-[#ffc66d]">findTop10ByOrderByPublishedAtDesc</span>();
                    {"\n"}  {"}"}

                    {"\n\n"}  <span className="text-[#cc7832]">public</span>{" "}
                    <span className="text-[#ffc66d]">News</span>{" "}
                    <span className="text-[#ffc66d]">createNews</span>(
                    <span className="text-[#ffc66d]">NewsRequest</span> request) {"{"}

                    {"\n"}    <span className="text-[#ffc66d]">News</span> news =
                    <span className="text-[#cc7832]"> new </span>
                    <span className="text-[#ffc66d]">News</span>();

                    {"\n"}    news.<span className="text-[#ffc66d]">setTitle</span>(request.getTitle());
                    {"\n"}    news.<span className="text-[#ffc66d]">setContent</span>(request.getContent());

                    {"\n\n"}    <span className="text-[#cc7832]">return</span>{" "}
                    newsRepository.<span className="text-[#ffc66d]">save</span>(news);

                    {"\n"}  {"}"}

                    {"\n"}{"}"}

                </div>

            </pre>
        </div>
    );
}