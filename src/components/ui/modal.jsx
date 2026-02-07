import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";

export default function ProjectModal({ isOpen, onOpenChange, title, description, techStack, link }) {
    return (
        <Modal
            size="5xl"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            classNames={{
                base: "bg-black border border-[#fb8569]/30",
                header: "border-b border-[#fb8569]/30",
                footer: "border-t border-[#fb8569]/30",
                closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-[#fb8569] font-boldonse tracking-wider">
                            {title || "Project Details"}
                        </ModalHeader>
                        <ModalBody className="py-6">
                            <p className="text-gray-300 font-body leading-relaxed">
                                {description}
                            </p>

                            <div className="mt-4">
                                <p className="text-sm text-[#fb8569] mb-2 font-bold">Tech Stack:</p>
                                <div className="flex flex-wrap gap-2">
                                    {techStack && techStack.map((tech, index) => (
                                        <span key={index} className="px-2 py-1 text-xs rounded-full bg-[#fb8569]/10 text-[#fb8569] border border-[#fb8569]/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            {/* {link && ( */}
                                <Button
                                    className="bg-[#fb8569]  text-black font-bold"
                                    as="a"
                                    href={link}
                                    target="_blank"
                                    onPress={onClose}
                                >
                                    Visit Project
                                </Button>
                            {/* )} */}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}